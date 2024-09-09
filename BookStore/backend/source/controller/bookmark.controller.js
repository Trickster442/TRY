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
}