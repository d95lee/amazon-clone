import './Home.css'
import NavBar from '../NavBar'
import SubNav from '../SubNav/SubNav'

const Home = () => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            <div className='home-background'>
                <p id='test'>test</p>
            </div>
        </>
    )
}



export default Home