import express from "express";
import "dotenv/config";
import connection from "./source/model/config.js";
import bookRoute from "./source/routes/book.routes.js";
import userRoute from "./source/routes/user.routes.js";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/books", bookRoute);
server.use("/users", userRoute);

server.get("/", (req, res) => {
  console.log("Server started");
  res.send("Home page");
});

server.listen(process.env.PORT || 8000, async () => {
  console.log("Server is running");
  try {
    await connection.authenticate();
    await connection.sync();
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err);
  }
});