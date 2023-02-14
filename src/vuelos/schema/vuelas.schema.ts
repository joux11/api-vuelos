import * as mongoose from 'mongoose';

export const VuelosSchema = new mongoose.Schema({
    piloto:{type: String, required :true},
    avios:{type: String, require:true},
    ciudadDestino:{type: String, require:true},
    fechaVuelo:{type: Date, require: true}
},{timestamps:true});

VuelosSchema.index({piloto:1},{unique:true})