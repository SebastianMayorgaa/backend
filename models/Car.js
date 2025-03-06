import { Schema, model } from "mongoose";

let collection = 'cars'
let schema = Schema({
    name:{type:String, required: true},
    color:{type:String, required: true},
    model:{type:String, required: true}
},
{
    timestamp:true
})

let Car = model(collection, schema)
export default Car