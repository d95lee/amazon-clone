import './Home.css'
import NavBar from '../NavBar'
import SubNav from '../SubNav/SubNav'
import ProductShow from '../Product/ProductShow'

const Home = () => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            <div className='home-background'>
            <ProductShow/>
               
            </div>
        </>
    )
}



export default Home