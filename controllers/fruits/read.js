import { response  } from "express";
import Fruit from "../../models/Fruit.js"

let allFruits = async (req,res,next) => {
    try {
        let all = await Fruit.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        return res.status(500).json({
            response:error
        })
    }
}

export default allFruits