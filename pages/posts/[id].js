import axios from 'axios';
import domain from '@/utils/config';
import POSTItem from '@/component/PostItem';

export default function idPost({posts}){
 const result=!posts.GetSinglePostResult?<p> not found</p>:
 <POSTItem post={posts.GetSinglePostResult}/>
return(
<>
<h2> ID POST : </h2>
{
result
}
</>
)
}

export async function getServerSideProps(context) {
   try {
      const response = await axios.get(`${domain}/posts/${context.query.id}`)
          console.log(`response ${response}`)
      return {
       props: {posts:response.data}
       }

} catch (error) {
      console.error("ERR:"+error);
       return {
             props: {posts:{GetSinglePostResult:null}}
     }
    }

}