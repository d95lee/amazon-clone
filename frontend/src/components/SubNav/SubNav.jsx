import { Link } from 'react-router-dom'
import './SubNav.css'

const SubNav = () => {
    
    
    return (
        <>
            <div className='subnav-bar'>
                <Link to={'/products'}><p className='text-deals'>Today's Deals</p></Link>
                <Link to={'/products'}><p className='text-deals'>Keep Shopping</p></Link>
                <Link to={'/products'}><p className='text-deals'>Livestreams</p></Link>
                <Link to={'/products'}><p className='text-deals'>Music</p></Link>
                <Link to={'/products'}><p className='text-deals'>Amazon Basics</p></Link>
                <Link to={'/products'}><p className='text-deals'>Gift Cards</p></Link>
                <Link to={'/products'}><p className='text-deals'>Buy Again</p></Link>
                <Link to={'/products'}><p className='text-deals'>Kindle Books</p></Link>
                <Link to={'/products'}><p className='text-deals'>Subscribe & Save</p></Link>
                <Link to={'/products'}><p className='text-deals'>Sell</p></Link>
            </div>
        </>
    )
}




export default SubNav