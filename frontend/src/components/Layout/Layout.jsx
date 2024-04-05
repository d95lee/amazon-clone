import React from "react"
import NavBar from "../NavBar"
import SubNav from "../SubNav/SubNav"


const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            {children}
        </>
    )
}


export default Layout 