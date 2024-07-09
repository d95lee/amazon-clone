import React from "react"
import NavBar from "../NavBar/NavBar"
import SubNav from "../SubNav/SubNav"


const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            <SubNav/>
            <div>{children}</div>
        </>
    )
}


export default Layout 