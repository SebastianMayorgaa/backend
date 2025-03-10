import { Router } from "express";
import movieReadController from "../controllers/movies/read.js"

const routerMovies = Router()

routerMovies.get('/allMovies', movieReadController)

export default routerMovies