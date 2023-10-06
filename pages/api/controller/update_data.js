import domain from '@/utils/config'
import axios from 'axios';


export async function updateData(perms) {
  // Call an external API endpoint to update post
  const response=await axios.put(`${domain}/posts/${perms.query.id}`)
  return response
}


/*

export async function getServerSideProps(context) {
   //try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${context.query.id}`)
      console.log(response)
      return {
       props: { post:response.data}
       }
    */
/*} catch (error) {
      console.error("ERR:"+error);
    }*//*

}*/
