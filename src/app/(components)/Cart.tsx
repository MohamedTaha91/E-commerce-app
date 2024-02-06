import Link from "next/link"
import "./Navbar.css"
import React from 'react';

const Cart = () =>{
    return (
        <div className="cartContainer">
        <Link href={"/"}><img src="cart.png" alt="Cart Icon" className="cartIcon"/></Link>
        <Link href={"/"}><img src="profile.jpg" alt="profile Icon" className="profileIcon"/></Link>
        <Link href={"/"}><img src="search.jpg" alt="search Icon" className="searchIcon"/></Link>
    </div>
    )
 
}

export default Cart