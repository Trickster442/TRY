import connection from "./config.js";
import { DataTypes } from "sequelize";

const bookmark = connection.define("bookmarks",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
     userID : {
        type : DataTypes.INTEGER,
        allowNull: false,
     }, 
     bookID : {
        type : DataTypes.INTEGER,
        allowNull: false,
     }
},
{
    timestamps: false
})

export default bookmark;