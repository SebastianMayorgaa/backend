import { response } from "express";
import Movie from "../../models/Movie.js"

let allMovies = async (req,res,next) => {
    try {
        let all = await Movie.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        return res.status(500).json({
            response:error
        })
    }
}

export default allMovies