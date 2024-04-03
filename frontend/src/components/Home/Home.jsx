import './Home.css'
import NavBar from '../NavBar'
import SubNav from '../SubNav/SubNav'
import ProductShow from '../Product/ProductShow'
import ProductsIndex from '../Product/ProductsIndex'

const Home = () => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            <div className='home-background'>
            <ProductShow/>
            <ProductsIndex/>
               
            </div>
        </>
    )
}



export default Home