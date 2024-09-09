import express from "express"
import UserController from "../controller/user.controller.js"
import multer from "multer";


const router = express.Router();
const userController = new UserController();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/assests/userUploads')
    },
    filename: function (req, file, cb) {
      const imageName = file.originalname.trim();
      cb(null, imageName);
    }
  })
  
  const upload = multer({ storage: storage })

router.get("/", (req,res)=>{
    res.status(200).send("this is user page");
})



router.post("/adduser", upload.single('photos'), (req,res)=>{
    
    const imageName = req.file.filecname;
    userController.addUser(req,res, imageName);
})

router.post('/authenticate', userController.authenticate);



export default router;