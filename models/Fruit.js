import { Schema, model } from "mongoose";

let collection = 'fruits'
let schema = Schema({
    name:{type:String, required: true},
    color:{type:String, required: true},
    taste:{type:String, required: true},
    season:{type:String, required: true}
},
{
    timestamps:true
})

let Fruit = model(collection,schema)
export default Fruit
