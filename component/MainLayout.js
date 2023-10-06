import Header from './Header'
import Footer from './Footer'

export default function mainLayout(props){
return(
<>
 <Header />
 {props.children}
 <Footer />
</>
)
}