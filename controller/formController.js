import formModel from "../module/formModel.js";
import Config_Db from "../Config/ConfigDb.js";
import { config } from "dotenv";

config();
Config_Db(process.env.NAME_DB || "Portfolio_DB");

const register = async (req,res,next) => {
    try {
        const form = new formModel(req.body);
        const newForm = await form.save();
        if(newForm) {
            res.status(200).json({newForm, message : "your information are registered"});
        }else {
            res.status(400).json({message : "sorry you have an wrong someWhere Try again please !" })
        }
        next();
    }catch (err) {
        console.error(err);
    }
}

const deleteForm = async (req,res,next) => {
    try {
         const form = await formModel.findByIdAndDelete(req.params.id);
        if(form) {
            res.status(200).json({form, message : "client deleted"});
        }else {
            res.status(400).json({message : "sorry you have an wrong someWhere Try again please !" })
        }
        next();
    }catch (err) {
        console.error(err);
    }
}

export  {register,deleteForm};