import {Router} from "express";
import {register, deleteForm } from "../controller/formController.js";

const formRouter = Router();

formRouter.post("/add",register);
formRouter.delete("/:id",deleteForm);

export default formRouter;