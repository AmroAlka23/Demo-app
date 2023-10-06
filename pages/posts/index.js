// add bootstrap css
//import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

export default function indexPost(){
return(
<>
<h2> INDEX POST </h2>
<div className="container text-center">
  <div className="row gy-3">

    <div className="col">
    <div className="p-3" style={{backgroundColor:'blue'}}> show detail post </div>
    <Link href='posts/detail'>Next </Link>
     </div>
    <div className="col">
    <div className="p-3" style={{backgroundColor:'red'}}> Add post </div>
    <Link href='posts/add_post'>Next </Link>
      </div>
     <div class="w-100 d-none d-md-block"></div>

      <div className="col">
    <div className="p-3 order-5" style={{backgroundColor:'brown'}}> One of three columns </div>
        </div>
       <div className="col">
    <div className="p-3" style={{backgroundColor:'green'}}> One of three columns </div>
       </div>
  </div>
</div>




<hr/>
<div className="text-success">
  <hr/>
  name of the directory.<br/>
  To edit settings, press <kbd><kbd>Ctrl</kbd> + <kbd>,</kbd></kbd>
</div>
<hr className="border border-danger border-2 opacity-50"/>
<hr className="border border-primary border-3 opacity-75"/>


<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div classNameName="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
 <details>
   <summary>Download contents</summary>

   ```text
   bootstrap/
   ├── css/
   │   ├── bootstrap-grid.css
   │   ├── bootstrap-grid.css.map
   │   ├── bootstrap-grid.min.css
   │   ├── bootstrap-grid.min.css.map
   │   ├── bootstrap-grid.rtl.css
   │   ├── bootstrap-grid.rtl.css.map
   │   ├── bootstrap-grid.rtl.min.css
   │   ├── bootstrap-grid.rtl.min.css.map
   │   ├── bootstrap-reboot.css
   │   ├── bootstrap-reboot.css.map
   │   ├── bootstrap-reboot.min.css
   │   ├── bootstrap-reboot.min.css.map
   │   ├── bootstrap-reboot.rtl.css
   │   ├── bootstrap-reboot.rtl.css.map
   │   ├── bootstrap-reboot.rtl.min.css
   │   ├── bootstrap-reboot.rtl.min.css.map
   │   ├── bootstrap-utilities.css
   │   ├── bootstrap-utilities.css.map
   │   ├── bootstrap-utilities.min.css
   │   ├── bootstrap-utilities.min.css.map
   │   ├── bootstrap-utilities.rtl.css
   │   ├── bootstrap-utilities.rtl.css.map
   │   ├── bootstrap-utilities.rtl.min.css
   │   ├── bootstrap-utilities.rtl.min.css.map
   │   ├─ bootstrap.css
   │   ├── bootstrap.css.map
   │   ├── bootstrap.min.css
   │   ├── bootstrap.min.css.map
   │   ├── bootstrap.rtl.css
   │   ├── bootstrap.rtl.css.map
   │   ├── bootstrap.rtl.min.css
   │   └── bootstrap.rtl.min.css.map
   └── js/
       ├── bootstrap.bundle.js
       ├── bootstrap.bundle.js.map
       ├── bootstrap.bundle.min.js
       ├── bootstrap.bundle.min.js.map
       ├── bootstrap.esm.js
       ├── bootstrap.esm.js.map
       ├── bootstrap.esm.min.js
       ├── bootstrap.esm.min.js.map
       ├── bootstrap.js
       ├── bootstrap.js.map
       ├── bootstrap.min.js
       └── bootstrap.min.js.map
   ```
 </details>
</>
)
}