import Link from "next/link"
import "./Navbar.css"
import React from 'react';
import { CiShoppingCart ,CiUser, CiSearch } from "react-icons/ci";

const Cart = () => {
    return (
        <div className="cartContainer">
            <Link href={"/"}><CiShoppingCart size={40} /></Link>
            <Link href={"/"}><CiSearch size={40} /></Link>
            <Link href={"/"}><CiUser size={40} /></Link>
        </div>
    )
}

export default Cart