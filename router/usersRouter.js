import { Router } from "express";
import userReadController from "../controllers/users/read.js"

const routerUsers = Router()

routerUsers.get('/allUsers',userReadController)

export default routerUsers