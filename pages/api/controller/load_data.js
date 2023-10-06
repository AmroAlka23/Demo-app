import domain from '@/utils/config';
import axios from 'axios';


export  async function loadPosts(perms) {
  // Call an external API endpoint to get posts
  const response=await axios.get(`${domain}/posts/${perms}`)
  return response
}



// from a `lib/` directory
/*export  async function loadPosts(perms) {
  // Call an external API endpoint to get posts
  const res = await fetch(`${domain}/posts/${perms}`)
  const data = await res.json()
  return data
}*/

//way first
// This function runs only on the server side
/*export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadData('${domain}/posts/${perms}')
  // Props returned will be passed to the page component
  return { props: { posts } }
}*/

 //way second
 /*
export async function getStaticProps() {
   //try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      console.log(response)
      return {
       props: { posts:response.data}
       }
    *//*} catch (error) {
      console.error("ERR:"+error);
    }*//*
}
*/
//jj
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
