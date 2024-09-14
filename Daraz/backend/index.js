import express, { urlencoded } from "express";
import 'dotenv/config'
import connection from './model/config.js'
import userRoute from './route/user.route.js'
import adminRoute from './route/admin.route.js'
import { json } from "sequelize";



//middleware and configuration 

const server = express();
server.use(json());
server.use(urlencoded({extended:true}));

server.use('/daraz', userRoute);
server.use('/admin', adminRoute);


server.get('/', (req,res)=>{
    res.send('<h1>Project Started</h1>');
})

server.listen(process.env.PORT, ()=>{
    console.log("Server is running");

    try{
        connection.authenticate()
        console.log("Successfully connected to database")
        connection.sync();
    }catch{
        console.log("Error during connection to database")
    }
})