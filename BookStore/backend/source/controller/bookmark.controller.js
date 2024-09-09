import bookMarkModel from "../model/bookMark.model.js";

export default class BookMark{
    async addBookmark(req,res){
        const response = await bookMarkModel.create(req.body) ;
        if (response){
            res.json({success : true, message : "Bookmarked successfully"})
        } else {
            res.json({success: false, message : 'Bookmark failed'})
        }
    }
}