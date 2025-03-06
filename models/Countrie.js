import { Schema, model } from "mongoose";

let collection = 'countries'
let schema = Schema({
    name:{type:String, required: true},
    continent:{type:String, required: true},
    population:{type:Number, required: true}
},
{
    timestamps:true
})

let Countrie = model(collection, schema)
export default Countrie