import { Schema, model } from "mongoose";

let collection = "movies"
let schema = Schema({
    title:{type:String, required: true},
    genre:{type:String, required: true},
    director:{type:String, required: true},
    year:{type:Number, required: true},
    rating:{type:Number, required: true}
},
{
    timestamps:true
})

let Movies = model(collection,schema)
export default Movies 