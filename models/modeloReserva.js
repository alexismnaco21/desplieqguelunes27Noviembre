import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema ({
    fechaEntrada : {
        type : Date,
        require: true
    },
    fechaSalida : {
        type : Date,
        require : true
    },
    personas :{
        type : Number,
        require : true
    },
    nombrePersonasReserva: {
        type : String,
        require : true
    },
    costo : {
        type : Number,
        require : false
    }
})

export const modeloReserva = mongoose.model('reserva',Reserva)