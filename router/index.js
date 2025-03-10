import { Router } from "express";
import routerUsers from "./usersRouter.js";
import routerCars from "./carsRouter.js";
import routerCountries from "./countriesRouter.js";
import routerFruits from "./fruitsRouter.js";
import routerMovies from "./moviesRouter.js";
import routerPlanets from "./planetsRouter.js";
import routerVideogames from "./videogamesRouter.js";

let routerIndex = Router()
routerIndex.use('/users', routerUsers)
routerIndex.use('/cars', routerCars)
routerIndex.use('/countries',routerCountries)
routerIndex.use('/fruits', routerFruits)
routerIndex.use('/movies', routerMovies)
routerIndex.use('/planets', routerPlanets)
routerIndex.use('/videogames', routerVideogames)


export default routerIndex