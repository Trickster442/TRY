import bookModel from "../model/book.model.js";

export default class Book {
    async add (req,res, imageName ){
        try{
        const data = await bookModel.create({ ...req.body, image: imageName});
        if (data){
        console.log(data);
        res.json(data);
        }
        else {
            res.json({success: false , message: "Book id not found"})
        }
    }catch(err){
       return  res.json({success: false, message: "Error in database query"});
    }
}
}