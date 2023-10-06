import Post from '@/models/Post';
import ConnDB from '@/utils/db/conn_db';
import nextConnect from "next-connect";

 //
 ConnDB();
 //

 const handler=nextConnect();

 handler.get(async(req, res) => {
   try{
      const posts=await Post.find({});
      //res.send(posts)
      res.status(200).json({GetPosts:posts});
    }catch(error){
      console.log(error);
      return res.status(400).json({msg:'sorry something wrong in Get Data,status:400'});
   }
  });

export default  handler

