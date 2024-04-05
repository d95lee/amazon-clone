import './Home.css'
import NavBar from '../NavBar'
import SubNav from '../SubNav/SubNav'
import ProductShow from '../Product/ProductShow'
import { Link } from 'react-router-dom'
import ProductsHome from '../Product/ProductsHome'

const Home = () => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            <div className='home-background'>
            <ProductsHome/>
               
            </div>
        </>
    )
}


export default Home