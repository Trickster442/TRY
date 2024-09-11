import bookMarkModel from "../model/bookMark.model.js";
import bookModel from "../model/book.model.js";
export default class BookMark{
    async addBookmark(req,res){
        const response = await bookMarkModel.create(req.body) ;
        if (response){
            res.json({success : true, message : "Bookmarked successfully"})
        } else {
            res.json({success: false, message : 'Bookmark failed'})
        }
    }

    async deleteBookmark(req,res){
        const { id } = req.params
        console.log(id);
        if (id){
            const response = await bookMarkModel.destroy({where : { id}});
            if (response) {
                res.json({success : true, message : "Bookmarked book deleted successfully"})
            } else {
                res.json({success: false, message : 'Bookmarked book deletion failed'})
            }
        }
    }

    async getBookmarks(req, res) {
        try {
            // Fetch bookmarks including related book data
            const response = await bookMarkModel.findAll({
                include: {
                    model: bookModel,
                    attributes: ['name', 'genre', 'author', 'image']
                }
            });
    
            if (response && response.length > 0) {
                // Modify the image URL or path
                const baseURL = 'http://localhost:8888/assests/uploads/';
    
                // Convert response to plain objects and modify the image URLs
                const modifiedResponse = response.map(bookmark => {
                    const bookmarkJSON = bookmark.toJSON(); // Convert to plain object
                    if (bookmarkJSON.book && bookmarkJSON.book.image) {
                        bookmarkJSON.book.image = baseURL + bookmarkJSON.book.image;
                    }
                    return bookmarkJSON;
                });
    
                // Send the modified response
                res.json({
                    success: true,
                    message: "Successful",
                    data: modifiedResponse
                });
            } else {
                res.json({
                    success: false,
                    message: 'No bookmarks found'
                });
            }
        } catch (error) {
            console.error('Error fetching bookmarks:', error);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error'
            });
        }
    }
    
    
    
}