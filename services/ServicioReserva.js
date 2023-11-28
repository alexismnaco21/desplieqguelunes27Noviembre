import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{
    constructor(){}
    
    async registrarReserva(datos){
        let reservaNueva  = new modeloReserva(datos)
        return await reservaNueva.save()
    }
    async buscarReservas(){
        let reservas = await modeloReserva.find()
        return reservas
    }
    async buscarReserva(id){
        let reserva = await modeloReserva.findById(id)
        return reserva
    }
    async modificarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async borrarReserva(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}