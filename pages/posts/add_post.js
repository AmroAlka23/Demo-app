import '@/styles/Post.module.css'
import {useState} from 'react'
import domain from '@/utils/config'
import axios from 'axios';

export default function addPost(){

const  [password,setPassword]=useState('')
const  [title,setTitle]=useState('')
const  [details,setdetails]=useState('')
const  [user,setuser]=useState('')
const  [isSuccess,setIsSuccess]=useState(false)


 async function sendPostApi(){
   if(title!=''||user !=''){
  const post={password,title,details,user}
  console.log(post)
   try{
   const res= await axios.post(`${domain}/posts/RegisterPost`,post)
  alert('Post Added Successfully.!'+res.data[0])
      //setIsSuccess(true)
      //hideOrShowResult()
    }catch(error){
      alert(`error in add post ${error}`)
    }
  }else{
    alert('must input all fields .!!!')
   }
 }

 function hideOrShowResult(){
   if(isSuccess){
    alert('Post Added Successfully.!')
   return(<div className="alert alert-success w-50 mx-auto" role="alert" id="container">
    <h4 className="alert-heading">Well done !</h4>
    <p>Post Added Successfully.!.</p>
    <hr/>
     <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
   </div>)
  }
 }

return(
<>

<h2> ADD POST </h2>

<div className="card border-success w-50 mx-auto" style={{width:'42rem',  padding: '1rem', margin:'6rem'}}>
<div className="card-body">
 <h5 className="card-title">Register Personal Data</h5>
// novalidate=""
 <form className="row g-3 needs-validation was-validated"  >


  <div className="col-md-6">
    <label for="inputdetails4" className="form-label">details</label>
    <input type="Text" className="form-control" id="inputdetails4"
       name="details"  value={details}
       onChange={(e)=>{setdetails(e.target.value)}}
    aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">Please  choose details! </div>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"
     name="password"  value={password}
     onChange={(e)=>{setPassword(e.target.value)}}
    aria-describedby="inputGroupPrepend" required/>
    <div className="invalid-feedback"> Looks good!</div>
  </div>
  <div className="col-12">
    <label for="inputuser" className="form-label">user</label>
    <input type="text" className="form-control" id="inputuser"
          name="user"  value={user}
          onChange={(e)=>{setuser(e.target.value)}}
     placeholder="1234 Main St" required/>
    <div className="valid-feedback"> Looks good!</div>
  </div>

  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputTitle" className="form-label">title</label>
    <input type="text" className="form-control"
     name="title" value={title}
     onChange={(e)=>{setTitle(e.target.value)}}
     id="inputTitle"/>
  </div>
  <div className="col-md-6">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="offset-sm-4 col-sm-4">
    <button className="btn btn-primary" onClick={sendPostApi}>Register</button>
  </div>
</form>

<div>
  <label for="formFileLg" className="form-label">Large file input example</label>
  <input className="form-control form-control-md" id="formFileLg" type="file"/>
</div>

</div></div>

</>
)
}