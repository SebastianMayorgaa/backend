import { Router } from "express";
import carReadController from "../controllers/cars/read.js"

const routerCars = Router()

routerCars.get('/allCars', carReadController)

export default routerCars