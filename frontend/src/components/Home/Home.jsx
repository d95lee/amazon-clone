import './Home.css'
import NavBar from '../NavBar'
import SubNav from '../SubNav/SubNav'
import ProductShow from '../Product/ProductShow'
import { Link } from 'react-router-dom'
// import ProductsIndex from '../Product/ProductsIndex'

const Home = () => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            <div className='home-background'>
               
            </div>
        </>
    )
}



export default Home