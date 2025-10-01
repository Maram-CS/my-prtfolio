import { Router } from "express";

const AppRouter = Router();

AppRouter.get("/index",(req,res)=>{
    res.render("auth/index");
})

export default AppRouter;