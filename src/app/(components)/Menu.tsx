import Link from "next/link"
import "./Navbar.css" 

const Menu = () => {
    return (
        <div className="menuContainer">
            <Link href={"/"}>Collection</Link>
            <Link href={"/"}>New In</Link>
            <Link href={"/"}>1 Tee = 1 tree</Link>
            <Link href={"/"}>Outlet</Link>
        </div>
    )
}
export default Menu 