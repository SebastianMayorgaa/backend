import { response } from "express";
import Videogames from '../../models/Videogame.js'

let allVideogames = async (req,res,next) => {
    try {
        let all = await Videogames.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
       return res.status(500).json({
        response: error
       }) 
    }
}

export default allVideogames