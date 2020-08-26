import axios from 'axios'

// constantes
const dataInicial = {
    array: [],
}
//types
const OBTENER_CLIENTES_EXITO = 'OBTENER_CLiENTES_EXITO'
const AGREGAR_CLIENTES_EXITO = 'AGREGAR_CLiENTES_EXITO'

// reducer
export default function aymReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_CLIENTES_EXITO:
            return {...state, array: action.payload}
        case AGREGAR_CLIENTES_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//ACTIONS
export const obtenerClientesAccion = () => async (dispatch, getState) => {
    try{
        const res = await axios.get('https://apiaym.herokuapp.com/api/clientes')
        dispatch({
            type:  OBTENER_CLIENTES_EXITO,
            payload: res.data
        })
    }catch(error){
        console.log(error)
    }
}

export const agregarClientesAccion = (cedula, nombre, tlf, tlf2, 
    tlf_pago_movil, correo, pass_correo ) => async (dispatch, getState) => {
    
    //console.log("dispach es ", getState().productos.array)
    const vector = getState().clientes.array
    const form = {
        cedula: cedula.cedula,
        nombre: nombre.nombre,
        tlf: tlf.tlf,
        tlf2: tlf2.tlf2,
        tlf_pago_movil: tlf_pago_movil.tlf_pago_movil,
        correo: correo.correo,
        pass_correo: pass_correo.pass_correo,
    }
    try{
        const res = await axios.post('https://apiaym.herokuapp.com/api/clientes', form)
        const produc = [...vector,res.data];
        console.log("que me llega: ", res.data)
        dispatch({
            type:  AGREGAR_CLIENTES_EXITO,
            payload: produc
            //payload: res.data
        })
    }catch(error){
        console.log(error)
    }
}