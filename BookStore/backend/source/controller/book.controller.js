import { Op } from "sequelize";
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
    async deleteBook(req,res){
        try{
        const { id } = req.params ;
        console.log(id);
        if (id){
            const response = await bookModel.destroy({where: {
                id : id
            }})
            if (response) {
                res.json({success:true, message:'Deleted successfully'})
            } else {
                res.json({success : false, message: 'Error deleting'})
            }
        } else{
            console.log('NO ID');
            res.json({success : false, message: "Error in getting id"});
        }
    } catch(err){
        console.log(err);
    }
    } 

    async allBook(req, res) {
        try {
            const response = await bookModel.findAll({
                raw: true
            });
    
            if (response.length > 0) {
                // If there are books, return them with a 200 status code
                res.status(200).json(response);
            } else {
                // If no books are found, return an empty array with a 200 status code
                res.status(200).json([]);
            }
        } catch (error) {
            // Log the error and return a 500 status code for server errors
            console.error('Error fetching books:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    

async searchBooks(req, res) {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ message: 'Query parameter q is required' });
    }

    try {
        const response = await bookModel.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${q}%` 
                        }
                    },
                    {
                        author: {
                            [Op.like]: `%${q}%`
                        }
                    }
                ]
            },
            raw: true 
        });

        if (response.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ message: 'No books found matching the query' });
        }
    } catch (error) {
        console.error('Error searching books:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

}