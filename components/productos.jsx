import React, {useState} from 'react'
import { 
  StyleSheet, 
  Text, View, FlatList, Button, TextInput, 
  TouchableHighlight, TouchableOpacity,
  Alert } from 'react-native';


import { ListItem  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerProductosAccion, agregarProductosAccion} from '../redux/productosDucks'

const numColumns = 3

const Productos = () => {

    const [buscar, setBuscar] = useState("")

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()

    // crearmos el state utilizando nuestra tienda
    // store.productos lo sacamos de la tienda
    
    const productos = useSelector(store => store.productos.array)

    return (
        <View style={styles.container}>
            <Text>Productos!</Text>

            <View>
              <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Nombre"
                onChangeText={text => {setNombre({nombre: text})}}
              />
              
              <Button
                  title="Agregar"
                  onPress={() => dispatch(agregarProductosAccion(nombre, cantidad, precio, descripcion))}
              />
            </View>

            <Button style={styles.botonFlotante}
                  title="Obtener"
                  onPress={() => dispatch(obtenerProductosAccion())}
            />


            
            <FlatList  style={styles.lista}
                data= {productos}
                keyExtractor={item => item.id}
                renderItem={({item})=> 
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Details')}
                      //onPress={() => Alert.alert('titulo','mensaje')}
                    >
                      <Text style={styles.elemento}>{item.nombre} - {item.precio} </Text>
                    </TouchableOpacity>
                  </View>
                } 
                numColumns= {numColumns}
                
            />

        
        </View>
    )
}

export default Productos

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
      width: 100,
      margin: 1,
      padding: 5,    
    
    },
    botonFlotante: {
      borderRadius: 60,    
      bottom: 10,              
      right: 10, 
    },
    lista: {
      paddingTop: 20,
      
    }
  });


