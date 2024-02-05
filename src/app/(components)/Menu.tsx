import Link from "next/link"
import "./Navbar.css" 

const Menu = () => {
    return (
        <div className="menuContainer">
            <Link href={"/"}>Collection</Link>
            <Link href={"/"}>My Wituka</Link>
            <Link href={"/"}>Cart and stuff</Link>
        </div>
    )
}




export default Menu 