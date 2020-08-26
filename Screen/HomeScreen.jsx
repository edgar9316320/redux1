import React, {useState, useEffect} from 'react'
import { 
  StyleSheet, 
  Text, View, FlatList, TextInput, 
  TouchableOpacity, CheckBox, Switch} from 'react-native';

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerProductosAccion, agregarProductosAccion} from '../redux/productosDucks'
import {obtenerClientesAccion, agregarClientesAccion} from '../redux/clientesDucks'

//Iconos
import Icon from 'react-native-vector-icons/Ionicons'

const numColumns = 3

export function HomeScreen({ navigation }) {

  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch()

  // crearmos el state utilizando nuestra tienda
  // store.productos lo sacamos de la tienda
  const productos = useSelector(store => store.productos.array)

  const clientes = useSelector(store => store.clientes.array)

  const [buscar, setBuscar] = useState('');
  const [auxiliar, setAuxiliar] = useState([]);

  const [auxClientes, setAuxClientes] = useState([]);

  const [total, setTotal] = useState(0.00)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    dispatch(obtenerProductosAccion())
    dispatch(obtenerClientesAccion())
    setAuxiliar(productos)
    setAuxClientes(clientes)

    

    },[])

  const filtrarArticulo = text => {    
    const newData = productos.filter(item => {      
      const itemData = `${item.nombre.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    setAuxiliar(newData);  
  };

  const filtrarCliente = text => {    
    const newData = clientes.filter(item => {      
      const itemData = `${item.nombre.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    setAuxClientes(newData); 
  };

  const sumarTotal = (prec) => {
      setTotal(parseFloat(total) + parseFloat(prec))
  }

  console.log('que sale de auxiliar', auxiliar.length)

    return (
        <View style={{flex: 1}}>
          
          <View style={styles.cabecera}>
            <Text style={styles.titulo}> ${total}</Text>
          </View>  
          
          
          
          

         

          <View style={styles.container}>
          
          <View style={styles.listah}>
            <FlatList  
                data= {auxClientes}
                keyExtractor={item => item.id}
                renderItem={({item})=> 
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Clientes')}
                      //onPress={() => sumarTotal(item.precio)}
                      
                    >
                      <Text style={styles.elemento}>{item.nombre} - {item.cedula} </Text>
                    </TouchableOpacity>
                  </View>
                } 
                horizontal
             />
            </View>


          
          {isEnabled ? 
              
              <View style={{flexDirection: 'row'}}>
                <Icon name={'md-search'} size={28} color={"#f4511e"} style={styles.inputicon} />
                <TextInput 
                  style={styles.txtinput}
                  placeholder="Buscar Cliente"
                  onChangeText={text => filtrarCliente(text)}
                  
                />
                <Switch
                  trackColor={{ false: "#767577", true: "#FF8557" }}
                  thumbColor={isEnabled ? "#f4511e" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            
          : 
              
              <View style={{flexDirection: 'row'}}>  
                <Icon name={'md-search'} size={28} color={"#f4511e"} style={styles.inputicon} />
                <TextInput 
                  style={styles.txtinput}
                  placeholder="Buscar Articulo"
                  onChangeText={text => filtrarArticulo(text)}
                  
                />
                <Switch
                  trackColor={{ false: "#767577", true: "#FF8557" }}
                  thumbColor={isEnabled ? "#f4511e" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
          }
          

            
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
                      <View style={styles.elemento}>
                        <Text >{item.nombre} </Text>
                        <Text style={styles.precio}> {item.precio}</Text>
                      </View>
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
    cabecera: {
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      backgroundColor: "#f4511e",
      height: 100,
    },
    titulo: {
      fontSize: 50,
      color: "#fff",
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 'bold',
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
    precio: {
      fontSize: 14,
      color: "#f4511e",
      fontWeight: 'bold',
    },
    lista: {
      flex: 1,
      paddingTop: 10,
      //backgroundColor: '#16D3BC',
      //alignContent: 'center',
    },
    listah: {
      paddingTop: 5,
      height: 80,
    },
    txtinput: {
      height: 40, 
      width: 310,
      borderColor: "#f4511e",
      borderWidth: 0.1,
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
    CheckBox: {
      alignSelf: "center",
      marginTop: 10,
      
    },

    contenedorLista: {
      flex: 1,
      alignContent: "center",
    }


  });