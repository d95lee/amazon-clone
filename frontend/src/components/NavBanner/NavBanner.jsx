import './NavBanner.css'
import banner from '../../assets/images/Developer-Ad.png'

const NavBanner = () => {
    return (
        <>
            <div className='navbanner-top'>
                <div className='navbanner-top-content'>
                    <a href="https://www.linkedin.com/in/david-lee-49959a20a/" target="_blank"><img className='banner' src={banner} alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default NavBanner