import express from "express"

const router = express.Router();

router.get("/", (req,res)=>{
    res.status(200).send("This is book page");
})




export default router;