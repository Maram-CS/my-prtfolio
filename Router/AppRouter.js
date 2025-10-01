import { Router } from "express";

const AppRouter = Router();

AppRouter.get("/",(req,res)=>{
    res.render("auth/index");
})

export default AppRouter;