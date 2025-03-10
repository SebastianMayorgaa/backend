import { response } from "express";
import Planet from "../../models/Planet.js"

let allPlanets = async (req,res,next) => {
    try {
        let all = await Planet.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
export default allPlanets