import connection from "./config.js";
import { DataTypes } from "sequelize";

const bookModel = connection.define("books", {
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
    genre : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    author: {
        type: DataTypes.CHAR,
        allowNull: false
    }, 
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image : {
        type : DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false
})

export default bookModel;