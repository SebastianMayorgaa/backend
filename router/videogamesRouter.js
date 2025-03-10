import { Router } from "express";
import videogameReadController from '../controllers/videogames/read.js'

const routerVideogames = Router()
routerVideogames.get('/allVideogames', videogameReadController)

export default routerVideogames