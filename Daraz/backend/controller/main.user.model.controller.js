import mainUserModel from '../model/main.user.model.js';

export default class User {

    async addusers(req, res) {
        try {
            const data = req.body;
            
            if (!data) {
                return res.status(400).json({ success: false, message: "No data provided" });
            }
            
            const isAdded = await mainUserModel.create(data);
            
            if (isAdded) {
                return res.status(201).json({ success: true, message: "User added successfully!" });
            } else {
                return res.status(500).json({ success: false, message: "Failed to add user" });
            }
        } catch (error) {
            console.error("Error adding user:", error);
            return res.status(500).json({ success: false, message: "An error occurred while adding the user" });
        }
    }
}
