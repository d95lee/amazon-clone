import './NavBanner.css'
import banner from '../../assets/images/Developer-Ad.png'

const NavBanner = () => {
    return (
        <>
            <div className='navbanner-top'>
                <div className='navbanner-top-content'>
                    <a href="https://github.com/d95lee" target="_blank"><img className='banner' src={banner} alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default NavBanner