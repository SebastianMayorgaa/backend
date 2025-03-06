import mongoose from "mongoose";

let url = process.env.URI_MONGO
console.log(url);

//coneccion asincrona 
// mongoose.connect(url)
// .then(() => console.log("database conected"))
// .catch(error => console.log(error))

//coneccion sincrona 
async function connectDB() {
    try {
       await mongoose.connect(process.env.URI_MONGO)
       console.log("database connected");
       
    } catch (error) {
        console.log(error);  
    }
}
connectDB()