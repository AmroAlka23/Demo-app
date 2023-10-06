import Link from 'next/link'
import {useRouter} from 'next/router'

export default function index(){
 const router=useRouter()
 const typeCar='marsidas';
 const modelCar='9999';
return (
  <>
        <br/>
        <Link href="/services/carsid"> Cars Page</Link>
        <br/>
        <Link href="/"> Cars Page</Link>
           <br/>
          <button onClick={()=>{router.push('/services/marsidas/999')}}> click me</button>
               <br/>
         <button onClick={()=>{router.push('/services/marsidas/999')}}> click me</button>
         <br/>
         <button onClick={()=>{router.push(`/services/${typeCar}/${modelCar}`)}}> show car </button>

  </>
    )
}