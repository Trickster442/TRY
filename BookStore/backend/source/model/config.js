import { Sequelize } from "sequelize";
import "dotenv/config"

const connection = new Sequelize(process.env.DB_NAME,process.env.USER, process.env.PASSWORD, {
    host:process.env.HOST,
    dialect:"mysql"
})


export default connection;