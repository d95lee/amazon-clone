import './Home.css'
// import NavBar from '../NavBar'
// import SubNav from '../SubNav/SubNav'
import ProductsHome from '../Product/ProductsHome'
import Footer from '../FooterEle'
import Layout from '../Layout/Layout'


const Home = () => {
    return (
        <>
           <Layout>
                <div className='home-background'>
                    <ProductsHome/>
                </div>
                <div className='home-background-body'></div>
                <Footer/>
            </Layout>
        </>
    )
}


export default Home