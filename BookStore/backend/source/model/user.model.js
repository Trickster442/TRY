import connection from "./config.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
const userModel = connection.define("users", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name : {
        type : DataTypes.CHAR,
        allowNull: false
    },
    photos : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    email: {
        type : DataTypes.CHAR,
        allowNull: false,
        unique: true
    }, 
    password : {
        type : DataTypes.CHAR,
        set(value){
            console.log("value :", +value);
            const hashPass = bcrypt.hashSync(value, 10);
            this.setDataValue("password", hashPass);
        }
    }
},
{
    timestamps: false
})

export default userModel;