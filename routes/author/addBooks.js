const Book = require("../../models/Book")
const cloudinary = require("../../middelwares/cloudinary");
const fs = require("fs");
module.exports = async (req , res)=>{
    try {
        const {id} = req.auth;
        // console.log(req.file)
        // console.log(req.auth) 
        let {title, rate,desc,releaseDate } = req.body
        const uploader = async (path) => await cloudinary.uploads(path, "uploads");
        if(req.file){
            let { path } = req.file;
            const { url } = await uploader(path);
            fs.unlinkSync(path);
            const newBook = await new Book ({
                title ,
                rate ,
                desc ,
                releaseDate,
                author : id,
                bookImg : url,
             })
             const book = await newBook.save()
             return res.status(200).json({ status:true ,
                  message:"your book added succesfully",
                  data:book})
        }else{
            const newBook = await new Book ({
                title ,
                rate ,
                desc ,
                releaseDate,
                author : id,
                bookImg :"https://res.cloudinary.com/dw2xvijiu/image/upload/v1686245210/uploads/hqh13jzxp0g7ja6aveg3.png",
             })
             let book = await newBook.save()
             return res.status(200).json({ status:true ,
                  message:"your book added succesfully",
                  data:book})
        }
      
         
        
    } catch (error) {
        if (error) throw error;
        res.status(500).json({error})
    }
}