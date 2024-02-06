import Menu from "./Menu"
import "./Navbar.css" 
import Cart from "./Cart"
import React from "react"

const Navbar = ()=>{
    return(
        <div className="navbarContainer">
            <Menu/> 
            <img  src="/Screenshot 2024-02-06 143929.png" alt="Wituka Image" className="logoImage"/>
            <Cart/>
        </div>
    )
}

export default Navbar