import { Router } from "express";
import planetReadController from "../controllers/planets/read.js"

const routerPlanets = Router()

routerPlanets.get('/allPlanets', planetReadController)

export default routerPlanets