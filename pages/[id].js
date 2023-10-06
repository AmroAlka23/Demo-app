import {useRouter} from 'next/router'

export default function myID(){
const router =useRouter()
return (

  <>
        <h1> ID Page {router.query.id} </h1>
  </>
    )
}