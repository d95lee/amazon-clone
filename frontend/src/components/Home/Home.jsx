import './Home.css'
import NavBar from '../NavBar'
import SubNav from '../SubNav/SubNav'
import ProductsHome from '../Product/ProductsHome'
import Footer from '../FooterEle'


const Home = () => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            <div className='home-background'>
                <ProductsHome/>
            </div>
            <div className='home-background-body'></div>
            <Footer/>
        </>
    )
}


export default Home