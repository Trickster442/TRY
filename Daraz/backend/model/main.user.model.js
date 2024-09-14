import database from './config.js';
import { DataTypes } from 'sequelize';
const user = database.define('users', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    idAdmin : {
        type: DataTypes.BOOLEAN
    }


}, {
    timestamps: false
})


export default user;