import Menu from "./Menu"
import "./Navbar.css" 
import Cart from "./Cart"
import React from "react"
import Image from "next/image"; 
const Navbar = ()=>{
    return(
        <div className="navbarContainer">
            <Menu/> 
            <Image src="/Screenshot 2024-02-06 143929.png" 
            width={100}
            height={100}
            alt="Wituka Image" 
            className="logoImage"/>
            <Cart/>
        </div>
    )
}

export default Navbar