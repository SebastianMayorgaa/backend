import { response } from "express";
import Countrie from "../../models/Countrie.js"

let allCountries = async (req,res,next) =>{
    try {
        let all = await Countrie.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        return res.status(500).json({
            response:error
        })
    }
}

export default allCountries