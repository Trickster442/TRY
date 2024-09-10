import connection from "./config.js";
import { DataTypes } from "sequelize";
import BookModel from "./book.model.js";
import UserModel from "./user.model.js";

// Define the Bookmark model
const Bookmark = connection.define("bookmark", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
});

export default Bookmark;

// Define associations
Bookmark.belongsTo(BookModel, {
    foreignKey: 'bookID',
     // Optional: provides a name for the association
});

Bookmark.belongsTo(UserModel, {
    foreignKey: 'userID',
     // Optional: provides a name for the association
});
