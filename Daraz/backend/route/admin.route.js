import express from 'express'

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("This is admin home page");
})

export default router;