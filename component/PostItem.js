
export default function PostItem({post}){
 const theme={ padding: '1rem', margin:'2rem'}
return(
<>

<div className="card w-50 mx-auto" aria-hidden="false" style={theme}>
  <img src="https://via.placeholder.com/150/92c952" className="card-img-top" style={{height:'10rem'}}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
    <label for="title" className="form-label">title :</label>
      <span className="col-6" id="title">{post.title}</span>
    </h5>
    <p className="card-text ">
        <label for="user" className="form-label">user :</label>
      <span className="col-7"  id="user">{post.user}</span>

    </p>
      <p className="card-text ">
          <label for="details" className="form-label">details :</label>
          <span className=" col-4" id="details">{post.details}</span>
        </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>

</>
)
}
