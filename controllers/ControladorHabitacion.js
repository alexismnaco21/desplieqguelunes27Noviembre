import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
export class ControladorHabitacion{

    constructor(){}
    async registrarHabitacion(peticion,respuesta){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //1- esculcar los datos que quieren usar para el registro
            let datosHabitacionRegistrar = peticion.body
            //2-validar los datos
            //3- Intentar guardar los datos
            await servicioHabitacion.registrarHabitacion(datosHabitacionRegistrar)
            //4-Responder
            respuesta.status(200).json({
                "mensaje" : "Exito en la operacion de guardado",
                "datos" : datosHabitacionRegistrar
            })

        
        }catch(error){ respuesta.status(400).json({
            "mensaje" : "fallamos en la operacion de guardado" + error
        })}
    }
    async buscarHabitaciones(peticion,respuesta){  try{
        
        let servicioHabitacion = new ServicioHabitacion()
        //1-intentar buscar los datos en BD
        //2-Responder 
        respuesta.status(200).json({
            "mensaje" : "Exito en la operacion de busqueda",
            "datos" : await servicioHabitacion.buscarHabitaciones()
        })

        }catch(error){respuesta.status(400).json({
            "mensaje" : "fallamos en la operacion de busqueda" + error
        })}
    }
    async buscarHabitacionPorId(peticion,respuesta){  try{

            let servicioHabitacion = new ServicioHabitacion()
            //1- Esculcar los parametros de la peticion 
            let idHabitacionBuscar = peticion.params.id
            //2- validar el dato que dejo
            //3- Intento buscar el dato en BD
            respuesta.status(200).json({
                "mensaje" : "Exito en la operacion de busqueda",
                "datos" : await servicioHabitacion.buscarHabitacion(idHabitacionBuscar)
            })

        }catch(error){respuesta.status(400).json({
            "mensaje" : "fallamos en la operacion de busqueda" + error
        })}
    }
    async modificarHabitacion(peticion,respuesta){  
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //1- traigo el id a editar de la peticion
            let idHabitacionModificar = peticion.params.id
            let datosHabitacionModificar = peticion.body
            //validar los datos
            //intento buscar y modificar en BD
            await servicioHabitacion.modificarHabitacion(idHabitacionModificar,datosHabitacionModificar)
            //4-responder
            respuesta.status(200).json({
                "mensaje" : "Exito en la operacion de edicion",
                "datos" : "aca van los datos que se editaron"
            })
        }catch(error){respuesta.status(400).json({
            "mensaje" : datosHabitacionModificar
        })}
    }
    async borrarHabitacion(peticion,respuesta){  
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let idHabitacionBorrar = peticion.params.id
            //validar
            //intento borrar la habitacion 
            await servicioHabitacion.borrarHabitacion(idHabitacionBorrar)
            //Responder
            respuesta.status(200).json({
                "mensaje" : "Exito en la operacion de borrado",
            })

        }catch(error){respuesta.status(400).json({
            "mensaje" : "fallamos en la operacion de borrado"
        })}
    }

}