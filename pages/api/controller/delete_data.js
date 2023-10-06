import domain from '@/utils/config'
import axios from 'axios';


export async function deleteData(perms) {
  // Call an external API endpoint to delete Data
  const response=await axios.delete(`${domain}/posts/${perms}`)
  return response
}


/*

export async function getServerSideProps(context) {
   //try { // await axios.get(`https://jsonplaceholder.typicode.com/photos/${context.query.id}`)
      const response = deleteData(context.query.id)
      console.log(response)
      return {
       props: { post:response.data}
       }
    */
/*} catch (error) {
      console.error("ERR:"+error);
    }*//*

}*/
