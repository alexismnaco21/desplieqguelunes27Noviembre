import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReserva{

    constructor(){}
    async registrarReserva(peticion,respuesta){ try{
        let servicioReserva = new ServicioReserva()
        //1- esculcar los datos que quieren usar para el registro
        let datosHabitacionReservar = peticion.body
        //2-validar los datos
        //3- Intentar guardar los datos
        await servicioReserva.registrarReserva(datosHabitacionReservar)
        //4-Responder
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de guardado",
            "datos" : datosHabitacionReservar
        })

    
    }catch(error){ respuesta.status(400).json({
        "mensaje" : "fallamos en la operacion de guardado" + error
    })}}
    async buscarReservas(peticion,respuesta){ try{
        
        let servicioReserva = new ServicioReserva()
        //1-intentar buscar los datos en BD
        //2-Responder 
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de busqueda",
            "datos" : await servicioReserva.buscarReservas()
        })

        }catch(error){respuesta.status(400).json({
            "mensaje" : "fallamos en la operacion de busqueda" + error
        })}}
    async buscarReserva(peticion,respuesta){  try{

        let servicioReserva = new ServicioReserva()
        //1- Esculcar los parametros de la peticion 
        let idReservaBuscar = peticion.params.id
        //2- validar el dato que dejo
        //3- Intento buscar el dato en BD
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de busqueda",
            "datos" : await servicioReserva.buscarReserva(idReservaBuscar)
        })

    }catch(error){respuesta.status(400).json({
        "mensaje" : "fallamos en la operacion de busqueda" + error
    })}}
    async modificarReserva(peticion,respuesta){  try{
        let servicioReserva = new ServicioReserva()
        //1- traigo el id a editar de la peticion
        let idReservaModificar = peticion.params.id
        let datosReservaModificar = peticion.body
        //validar los datos
        //intento buscar y modificar en BD
        //4-responder
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de edicion",
            "datos" : await servicioReserva.modificarReserva(idReservaModificar, datosReservaModificar)
        })
    }catch(error){respuesta.status(400).json({
        "mensaje" : datosReservaModificar
    })}}
    async borrarReserva(peticion,respuesta){ try{
        let servicioReserva = new ServicioReserva()
        let idReservaBorrar = peticion.params.id
        //validar
        //intento borrar la habitacion 
        //Responder
        await servicioReserva.borrarReserva(idReservaBorrar)
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de borrado",
        })

    }catch(error){respuesta.status(400).json({
        "mensaje" : "fallamos en la operacion de edicion" + error
    })}}
    

}


