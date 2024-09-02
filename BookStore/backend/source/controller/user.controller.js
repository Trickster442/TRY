
import userModel from "../model/user.model.js";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";

export default class User{
    async addUser(req,res, image){
    try{
        const data = await userModel.create({...req.body, photos: image});
        if (data){
            console.log(data);
            res.json(data);
        }
    } catch (err){
    console.log(err);
    }
}   
    async authenticate(req,res){
        const data  =  req.body;
        console.log(data);
        if (data){
            const email = await userModel.findOne({where:{
                email : data.email
            }})
            console.log(email);
            if (email){
                const response = bcrpyt.compareSync(data.password,email.password);
                if (response) {
                    // Authentication successful
                   
                    const token = jwt.sign({id: email.id}, "secretkey", {
                        expiresIn: 60*60
                    });

                    delete email.dataValues.password;

                    email.dataValues.token = token;
                    res.json(email);

                } else {
                    // Authentication failed
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            }
        }
    }
}