import { Router } from "express";
import fruitsReadController from "../controllers/fruits/read.js"

const routerFruits = Router()

routerFruits.get('/allFruits', fruitsReadController)

export default routerFruits