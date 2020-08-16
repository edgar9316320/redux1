import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerProductosAccion, agregarProductosAccion} from '../redux/productosDucks'

const Productos = () => {

  const [nombre, setNombre] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [precio, setPrecio] = useState("")
  const [descripcion, setDescripcion] = useState("")

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()

    // crearmos el state utilizando nuestra tienda
    // store.productos lo sacamos de la tienda
    
    const productos = useSelector(store => store.productos.array)

    return (
        <View style={styles.container}>
            <Text>Productos!</Text>

            <View style={styles.form}>
              <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Nombre"
                onChangeText={text => {setNombre({nombre: text})}}
                //onChangeText={text => {this.setState({nombre: text})}}
                //value={this.state.form.nombre}
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Cantidad"
                onChangeText={text => {setCantidad({cantidad: text})}}
                //value={this.state.cantidad}
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Precio"
                onChangeText={text => {setPrecio({precio: text})}}
                //value={this.state.precio}
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Descripcion"
                onChangeText={text => {setDescripcion({descripcion: text})}}
                //value={this.state.descripcion}
              />
              <Button
                  title="Agregar"
                  onPress={() => dispatch(agregarProductosAccion(nombre, cantidad, precio, descripcion))}
              />
            </View>

            <Button
                  title="Obtener"
                  onPress={() => dispatch(obtenerProductosAccion())}
                />
            
            <FlatList  style={styles.lista}
                        data= {productos}
                        keyExtractor={item => item.id}
                        renderItem={({item})=> <Text>{item.nombre} - {item.precio} </Text> } 
                        
            />
        </View>
    )
}

export default Productos

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    form: {
      width: '80%',
      
    },
    lista: {
      marginVertical: 30,
      padding: 10,
      fontSize: 18,
      height: 44,
      display: block,
    },
  });
