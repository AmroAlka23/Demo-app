import Post from '@/models/Post';
import ConnDB from '@/utils/db/conn_db';
import nextConnect from "next-connect";

 //
 ConnDB();
 //
 const handler=nextConnect({ onError: (err, req, res, next) => {
                               console.error(err.stack);
                               res.status(500).end("Something broke!,status:500");
                             },
                             onNoMatch: (req, res) => { res.status(404).end("Page is not found,status:404");},
                           });

 handler.post(async(req, res) => {
       const {title,details,user,age}=await req.body;
       const newPost=new Post({title,details,user,age});
       try{
          await newPost.save();
          //res.send('Success, New Post added !')
          res.status(200).json({code:newPost._id,msg:'Success New Added !'});
       }catch(error){
         console.log('ERR:'+error);
         return res.status(400).json({msg:'Sorry something wrong in Add,status:400'})
       }
    });

export default  handler

