import { Router } from "express";
import countrieReadController from "../controllers/countries/read.js"

const routerCountries = Router()

routerCountries.get('/allCountries',countrieReadController)

export default routerCountries