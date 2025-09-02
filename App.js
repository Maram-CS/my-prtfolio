import formRouter from "./Router/formRouter.js";
import { config } from "dotenv";
import express from "express";
import AppRouter from "./Router/AppRouter.js";
import {join} from "path";


config ();
const Port = process.env.PORT || "7000";
const _dirname = import.meta.dirname;

const App = express();
App.use(express.urlencoded({extended : true}));
App.use(express.json());

App.set("view engine","ejs");
App.set("views", join(_dirname, "/views"));
App.use(express.static(join(_dirname, "/public")));

App.use("/api/App",formRouter);
App.use("/App",AppRouter);

App.listen(Port,() => {
    console.log(`server is working on Port :${Port}`);
})