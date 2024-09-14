import mainUserModel from '../model/main.user.model.js'

class User {

    async addUser(req,res){
        const data = req.body;
        if (data) {
            const isAdded = await mainUserModel.create(data)
            if (isAdded){
                res.json({success:true, message : "User added successfully !!"})
            } else {
                res.json({success:false, message: "Failed to add user"})
            }
        } else {
            res.send("Failed to get data")
        }
    }
}

export default User;