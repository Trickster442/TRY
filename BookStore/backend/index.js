import express from "express";
import "dotenv/config"
const server = express();




server.listen(process.env.PORT || 8000, ()=> {
    console.log("Server is running");
})