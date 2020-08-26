import React, {useState} from 'react';
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
//<icon name={'ios-person-outline'} size={28} color={"#f4511e"} style={styles.inputicon} />

// hooks react redux
import {useDispatch} from 'react-redux'

// importamos la acción
import {agregarClientesAccion} from '../redux/clientesDucks'

export function ClientesScreen() {


  const [cedula, setCedula] = useState("")  
  const [nombre, setNombre] = useState("")
  const [tlf, setTlf] = useState("")
  const [tlf2, setTlf2] = useState("")
  const [tlf_pago_movil, setTlf_pago_movil] = useState("")
  const [correo, setCorreo] = useState("")
  const [pass_correo, setPass_correo] = useState("")
  

  const dispatch = useDispatch()

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Agregar Productos</Text>

        <View style={styles.elementos}>

              <Icon name={'md-person-add'} size={28} color={"#f4511e"} style={styles.inputicon} />
              <TextInput 
                style={styles.txtinput}
                placeholder="Cedula"
                onChangeText={text => {setCedula({cedula: text})}}
            
              />

              <Icon name={'md-beaker'} size={28} color={"#f4511e"} style={styles.inputicon2} />
              <TextInput
                style={styles.txtinput}
                placeholder="Nombre"
                onChangeText={text => {setNombre({nombre: text})}}
                //value={this.state.cantidad}
              />

              <Icon name={'md-basket'} size={28} color={"#f4511e"} style={styles.inputicon3} />
              <TextInput
                style={styles.txtinput}
                placeholder="Telefono"
                onChangeText={text => {setTlf({tlf: text})}}
                //value={this.state.precio}
              />

              <Icon name={'md-filing'} size={28} color={"#f4511e"} style={styles.inputicon4} />
              <TextInput
                style={styles.txtinput}
                placeholder="Telefono Alternativo"
                onChangeText={text => {setTlf2({tlf2: text})}}
                //value={this.state.descripcion}
              />

              <Icon name={'md-filing'} size={28} color={"#f4511e"} style={styles.inputicon5} />
              <TextInput
                style={styles.txtinput}
                placeholder="Telefono Pago Movil"
                onChangeText={text => {setTlf_pago_movil({tlf_pago_movil: text})}}
                //value={this.state.descripcion}
              />

              <Icon name={'md-filing'} size={28} color={"#f4511e"} style={styles.inputicon6} />
              <TextInput
                style={styles.txtinput}
                placeholder="Correo"
                onChangeText={text => {setCorreo({correo: text})}}
                //value={this.state.descripcion}
              />

              <Icon name={'md-filing'} size={28} color={"#f4511e"} style={styles.inputicon7} />
              <TextInput
                style={styles.txtinput}
                placeholder="Contraseña"
                onChangeText={text => {setPass_correo({pass_correo: text})}}
                //value={this.state.descripcion}
              />
            
              <TouchableOpacity
                onPress={() => dispatch(agregarClientesAccion(cedula, nombre, tlf, tlf2,
                  tlf_pago_movil, correo, pass_correo ))}
              >
                <Text style={styles.btnChevere}> Agregar </Text>
              </TouchableOpacity>
        </View>

      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: '30%',
      marginHorizontal: 20,
            
    },
    elemntos: {
      
      
      
    },
    txtinput: {
      //flex:1,
      height: 40, 
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
    inputicon2: {
      position: "absolute",
      top: 65,
      left: 15,
    },
    inputicon3: {
      position: "absolute",
      top: 115,
      left: 15,
    },
    inputicon4: {
      position: "absolute",
      top: 165,
      left: 15,
    },
    inputicon5: {
      position: "absolute",
      top: 215,
      left: 15,
    },
    inputicon6: {
      position: "absolute",
      top: 265,
      left: 15,
    },
    inputicon7: {
      position: "absolute",
      top: 315,
      left: 15,
    },
    btnChevere: {
      borderRadius: 45,
      backgroundColor: "#f4511e",
      color: '#fff',
      height: 40,
      textAlign: 'center',
      paddingTop: 9,
      marginTop: 20,
      fontSize: 15,

    },
    titulo: {
      fontSize: 18,
      color: "#f4511e",
      textAlign: 'center',
    }
  });