import Post from '@/models/Post';
import ConnDB from '@/utils/db/conn_db';
import nextConnect from "next-connect";

 ConnDB();
 const handler=nextConnect();
 //const getPost = id => Post.find(p => p.id === parseInt(id))
 const getPost = id => Post.findOne({user:id})


  handler.get(async(req, res) => {
      const post =await getPost(req.query.id)
        if (!post) {
           return res.json({GetSinglePostResult:null,msg:`Sorry failed for value ${req.query.id} (type string) at path user for model Post `,post:post})
           //res.end()
          }
       res.json({GetSinglePostResult: post})
     })
 .delete(async(req, res) => {
   try{
     const post=await Post.findOneAndDelete({_id:req.query.id});
     res.send('Deleted !')
   }catch(error){
     console.log('ERR:'+error);
    return res.status(400).json({msg:'Sorry something wrong in Delete',error:error})
  }})
 .put(async(req, res) => {
       try{
         const post=await Post.findOne({_id:req.query.id});
           post.title=req.body.title
           post.details =req.body.details
           post.user=req.body.user
           post.age=req.body.age
           await post.save()
         //res.send('Updated !')
         res.status(200).json({code:post._id,msg:'Success Updated !'})
       }catch(error){
         console.log('ERR:'+error);
         return res.status(400).json({msg:'Sorry something wrong in Update',error:error})
       }
     });

export default  handler