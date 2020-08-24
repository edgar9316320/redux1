import React, {useState, useEffect} from 'react'
import { 
  StyleSheet, 
  Text, View, FlatList, Button, TextInput, 
  TouchableHighlight, TouchableOpacity,
  Alert } from 'react-native';

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerProductosAccion, agregarProductosAccion} from '../redux/productosDucks'

//Iconos
import Icon from 'react-native-vector-icons/Ionicons'


const numColumns = 3

export function HomeScreen({ navigation }) {

  const [buscar, setBuscar] = useState('');
  const [auxiliar, setAuxiliar] = useState([]);

  const [total, setTotal] = useState(0.00)

  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch()

  // crearmos el state utilizando nuestra tienda
  // store.productos lo sacamos de la tienda
  const productos = useSelector(store => store.productos.array)

  useEffect(() => {
    dispatch(obtenerProductosAccion())
    
    },[])

  const searchFilterFunction = text => {    
    const newData = productos.filter(item => {      
      const itemData = `${item.nombre.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    setAuxiliar(newData);  
  };

  const sumarTotal = (prec) => {
      setTotal(parseInt(total) + parseInt(prec))
  }

  console.log('que sale de auxiliar', auxiliar.length)

    return (
        <View style={{flex: 1}}>
          <Text style={styles.titulo}> ${total}</Text>
          
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              
              <Icon name={'md-search'} size={28} color={"#f4511e"} style={styles.inputicon} />
              <TextInput 
                style={styles.txtinput}
                placeholder="Buscar"
                onChangeText={text => searchFilterFunction(text)}
              />
              <TouchableOpacity
                onPress= {() => dispatch(obtenerProductosAccion())}
              >
                <Text style={styles.btnChevere}> B </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.contenedorLista}>
            <FlatList  style={styles.lista}
                data= {auxiliar}
                keyExtractor={item => item.id}
                renderItem={({item})=> 
                  <View>
                    <TouchableOpacity
                      //onPress={() => navigation.navigate('Details')}
                      onPress={() => sumarTotal(item.precio)}
                      
                    >
                      <Text style={styles.elemento}>{item.nombre} - {item.precio} </Text>
                    </TouchableOpacity>
                  </View>
                } 
                numColumns= {numColumns}
             />
            </View>
        
          </View>

        </View>
      
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 20,
    },
    elemento: {
      fontSize: 12,
      backgroundColor: '#F6F6F6',
      borderBottomColor: "#f4511e",
      borderBottomWidth: 1,
      borderRadius: 6, 
      height: 60,
      width: 113,
      margin: 2,
      padding: 4, 
         
    },
    lista: {
      flex: 1,
      paddingTop: 10,
      //backgroundColor: '#16D3BC',
      //alignContent: 'center',
    },
    txtinput: {
      height: 40, 
      width: 310,
      borderColor: "#f4511e",
      borderWidth: 1,
      borderRadius: 20,
      paddingLeft: 50,
      textDecorationColor: "#f4511e",
      flexDirection: "row",
      justifyContent:'space-between',
      marginTop: 10,
      
    },
    inputicon: {
      position: "absolute",
      top: 15,
      left: 15,
    },
    btnChevere: {
      width: 40,
      borderRadius: 45,
      backgroundColor: "#f4511e",
      color: '#fff',
      height: 40,
      textAlign: 'center',
      paddingTop: 9,
      marginTop: 10,
      fontSize: 15,

    },
    titulo: {
      fontSize: 50,
      color: "#f4511e",
      textAlign: 'center',
      marginTop: 10,
    },
    contenedorLista: {
      flex: 1,
      alignContent: "center",
      
    }


  });