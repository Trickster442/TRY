import database from './config.js';
import { DataTypes } from 'sequelize';
import bcrpyt from 'bcrypt';
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
        allowNull: false,
        set(value){
            const hashPass = bcrpyt.hashSync(value, 10);
            this.setDataValue('password', hashPass);
        }
    },
    idAdmin : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

}, {
    timestamps: false
})


export default user;