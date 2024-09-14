import express from 'express'
import UserController from '../controller/main.user.model.controller.js'


const router = express.Router();

const userController = new UserController();

router.get('/', (req,res)=>{
    res.send("This is user home page");
})

//user add delete update
router.post('/addUser', userController.addusers);

router.get('/deleteUser', (req,res)=>{
    res.send("This is delete page");
})

router.get('/updateUser', (req,res)=>{
    res.send("This is update user page");
})

export default router;