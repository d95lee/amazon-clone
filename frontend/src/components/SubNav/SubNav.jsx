import { Link } from 'react-router-dom'
import './SubNav.css'

const SubNav = () => {
    
    
    return (
        <>
            <div className='subnav-bar'>
                <Link to={'/products'}><p id='text-deals'>Today's Deals</p></Link>
                <Link to={'/products'}><p id='text-deals'>Keep Shopping For</p></Link>
                <Link to={'/products'}><p id='text-deals'>Livestreams</p></Link>
                <Link to={'/products'}><p id='text-deals'>Music</p></Link>
                <Link to={'/products'}><p id='text-deals'>Amazon Basics</p></Link>
                <Link to={'/products'}><p id='text-deals'>Gift Cards</p></Link>
                <Link to={'/products'}><p id='text-deals'>Buy Again</p></Link>
                <Link to={'/products'}><p id='text-deals'>Kindle Books</p></Link>
                <Link to={'/products'}><p id='text-deals'>Subscribe & Save</p></Link>
                <Link to={'/products'}><p id='text-deals'>Sell</p></Link>
            </div>
        </>
    )
}




export default SubNav