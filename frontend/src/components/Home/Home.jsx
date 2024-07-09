import './Home.css'
import ProductsHome from '../Product/ProductsHome'
import Footer from '../Footer/FooterEle'
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