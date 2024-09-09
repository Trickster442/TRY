
import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const bcrpyt = bcrypt;
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

async  authenticate(req, res) {
    try {
        const data = req.body;
        console.log('Request body:', data);

        // Check if email is provided
        if (!data.email || !data.password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await userModel.findOne({ where: { email: data.email } });
        console.log('User found:', user);

        // If user not found, return 401 Unauthorized
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
            console.log("User not found: ", user);
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = bcrypt.compareSync(data.password, user.password);
        
        if (isPasswordValid) {
            // Generate JWT token
            const token = jwt.sign({ id: user.id }, 'your_secret_key', {
                expiresIn: '1h' // Use a string for expiration time, e.g., '1h'
            });

            // Exclude the password from the response
            const userResponse = { ...user.dataValues, token };
            delete userResponse.password;

            // Send response with user data and token
            return res.json(userResponse);
            console.log(user.data);
        } else {
            // Password mismatch
            return res.status(401).json({ success: false, message: 'Email and password do not match' });
            console.log("Email and password do not match");
        }
    } catch (error) {
        // Handle unexpected errors
        console.error('Authentication error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}



    


}