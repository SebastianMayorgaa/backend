import { Schema, model } from "mongoose";

let collection = 'planets'
let schema = Schema ({
    name:{type:String, required: true},
    type:{type:String, required: true},
    distanceFromSun:{type:String, required: true},
    diameter:{type:String, required: true},
    gravity:{type:String, required: true},
    moons:{type:Number, required: true},
    atmosphere:{type:String, required: true}
},
{
    timestamps:true
})

let Planet = model(collection,schema)
export default Planet