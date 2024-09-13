import express from "express";

const server = express();


server.get('/', (req,res)=>{
    res.send('<h1>Server Started</h1>');
})

server.listen(8000, ()=>{
    console.log("Server is running");
})