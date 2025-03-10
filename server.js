import express from "express"
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from "morgan"
import routerIndex from "./router/index.js"

const server = express()
const PORT = process.env.PORT || 8080 
const ready = ()=> console.log("Server ready in port:" +PORT);

//basic config
server.use(express.urlencoded({extended:true}))  //admite url complejo params/queries
server.use(express.json()) //tipo de info que recibe 
server.use(cors())  // Seguridad 
server.use(morgan('dev'))  //Info de solicitudes 

//router config
server.use('/api',routerIndex) 

server.listen(PORT, ready)