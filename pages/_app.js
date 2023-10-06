import '@/styles/globals.css'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import img  from 'next/image'
import MainLayout from '@/component/MainLayout'

export default function App({ Component, pageProps }) {
  return(
   <MainLayout>
    <Component {...pageProps} />
   </MainLayout>
   )
}
