
import userModel from "../model/user.model.js";

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
}