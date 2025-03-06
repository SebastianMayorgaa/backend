import { Schema, model } from "mongoose";

let collection = 'videogames'
let schema = Schema({
    title:{type:String, required: true},
    genre:{type:String, required: true},
    developer:{type:String, required: true},
    year:{type:Number, required: true},
    platform:{type:String, required: true},
    rating:{type:Number, required: true}
},
{
    timestamps:true
})

let Videogame = model(collection,schema)
export default Videogame