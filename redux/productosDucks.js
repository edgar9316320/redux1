import axios from 'axios'

// constantes
const dataInicial = {
    array: [],
}
//types
const OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO'
const AGREGAR_PRODUCTOS_EXITO = 'AGREGAR_PRODUCTOS_EXITO'

// reducer
export default function productosReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_PRODUCTOS_EXITO:
            return {...state, array: action.payload}
        case AGREGAR_PRODUCTOS_EXITO:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//ACTIONS
export const obtenerProductosAccion = () => async (dispatch, getState) => {
    try{
        const res = await axios.get('https://apiaym.herokuapp.com/api/productos')
        dispatch({
            type:  OBTENER_PRODUCTOS_EXITO,
            payload: res.data
        })
    }catch(error){
        console.log(error)
    }
}

export const agregarProductosAccion = (nombre, cantidad, precio, descripcion) => async (dispatch, getState) => {
    
    //console.log("dispach es ", getState().productos.array)
    const vector = getState().productos.array
    const form = {
        nombre: nombre.nombre,
        precio: cantidad.cantidad,
        cantidad: precio.precio,
        descripcion: descripcion.descripcion,
    }
    try{
        const res = await axios.post('https://apiaym.herokuapp.com/api/productos', form)
        const produc = [...vector,res.data];
        console.log("que me llega: ", res.data)
        dispatch({
            type:  AGREGAR_PRODUCTOS_EXITO,
            payload: produc
            //payload: res.data
        })
    }catch(error){
        console.log(error)
    }
}