import formRouter from "./Router/formRouter.js";
import { config } from "dotenv";
import express from "express";
import AppRouter from "./Router/AppRouter.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


config ();
const Port = process.env.PORT || "7000";


const App = express();
App.use(express.urlencoded({extended : true}));
App.use(express.json());

App.set("view engine","ejs");
App.set("views", join(__dirname, "/views"));
App.use(express.static(join(__dirname, "/public")));

App.use("/api/App",formRouter);
App.use("/",AppRouter);

App.listen(Port,() => {
    console.log(`server is working on Port :${Port}`);
})