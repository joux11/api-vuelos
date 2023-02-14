import * as mongoose from 'mongoose';
export const PasajeroSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true}
},{timestamps:true});

PasajeroSchema.index({email:1},{unique:true})