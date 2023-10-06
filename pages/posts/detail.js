//import Link from 'next/link'
import axios from 'axios';
import PostItem from '@/component/PostItem'
//import {LoadData} from '../api/controller/load_data'
import domain from '@/utils/config';


function MyPlaceholder(){
 const theme={ padding: '1rem', margin:'4rem'}
 return(
 <>
 <div className="card w-50 mx-auto" aria-hidden="true" style={theme}>
   <img src="..." className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title placeholder-glow">
       <span className="placeholder col-6"></span>
     </h5>
     <p className="card-text placeholder-glow">

       <span className="placeholder col-4"></span>
       <span className="placeholder col-4"></span>
       <span className="placeholder col-6"></span>
       <span className="placeholder col-8"></span>
     </p>
     <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
   </div>
 </div>
 </>
 )

}
function MyTable(){
 return(
 <>

<table className="table table-bordered  table-striped table-hover">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr className="table-success">
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
 </>
 )

}

export default function detailPost({posts}){
   //console.log("post:"+posts)
return(
 <>
     {
     !posts? <MyPlaceholder/> :
      posts.GetPosts.map((post)=>{
      const result=<PostItem post={post}/>
     return result
     })
     }
 </>
 )
}

// This function runs only on the server side
export async function getStaticProps(){
 //const defaultPost={GetPosts:[{title: "", details :"String",user: "ErrServer", age:0}]}
 try{
  console.log("response")
   const response=await axios.get(`${domain}/posts/FetchPostData`);
   return{
     props: {posts:response.data}
     }
  } catch (error) {
     console.error("ERR:"+error);
     return{
          props: {}
       }
   }
}



