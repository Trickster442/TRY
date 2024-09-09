import express from "express";
import BookController from "../controller/book.controller.js";
import BookMarkController from "../controller/bookmark.controller.js"
import multer from "multer";
import validateToken from "../middleware/tokenvalidation.js";

const router = express.Router();
const bookController = new BookController();
const bookMarkController = new BookMarkController();

//multer for image uploading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assests/uploads'); // Destination folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename
    const imageName = Date.now() + '-' + Math.round(Math.random() * 1E9) + "-" + file.originalname.trim();
    cb(null, imageName); // Pass the generated filename to multer
  }
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.status(200).send("This is book page");
});

// Route to add a book with an image
router.post("/addbook", upload.single("image"), (req, res) => {
  // Pass the image filename along with other data to the controller
  const imageName = req.file.filename; // Get the filename of the uploaded image
  bookController.add(req, res, imageName);
});

//api to delete book
router.delete('/delete/:id', bookController.deleteBook);

router.get('/allbook', bookController.allBook);

router.get('/searchbooks', bookController.searchBooks)

router.post('/add_bookmark', validateToken, bookMarkController.addBookmark)

router.delete('/delete_bookmark/:id', bookMarkController.deleteBookmark)


export default router;