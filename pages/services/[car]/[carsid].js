import {useRouter} from 'next/router'

export default function index(){
const router =useRouter()

return (
  <>

        <h1> Type Service : {router.query.car} </h1>
        <br/>
       <h1> Model Car :{router.query.carsid} </h1>


  </>
  )
}