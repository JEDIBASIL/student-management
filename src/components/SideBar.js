import { useState } from "react"
import {RiHome8Line, RiLogoutCircleLine, RiArrowRightFill, RiMailAddLine, RiSettings2Line, RiUser2Line, RiUserAddLine} from "react-icons/ri"
import { NavLink as A , Link } from "react-router-dom"
const SideBar = () => {

    const [resizeBar, setResizeBar] = useState(false);
 
  return (
    <nav className={resizeBar ? "user_bar resize_bar" : "user_bar"}>
        <div className="nav_logo">
            <Link to={"/"}>School</Link>
            <RiArrowRightFill onClick={() => setResizeBar(!resizeBar)} className="resize_icon" />
        </div>
        <menu>
            <ul>
                <li>
                    <A to={"/"} href=""><RiHome8Line /> <span>Home</span></A>
                </li>
                <li>
                    <A to={"/students"} href=""><RiUser2Line /> <span>Students</span></A>
                </li>
                <li>
                    <A to={"/add-student"} href=""><RiUserAddLine /> <span>Add student</span></A>
                </li>

                <li>
                    <A to={"/send-mail"} href=""><RiMailAddLine /> <span>Send mail</span></A>
                </li>

            </ul>

            <ul>
                <li>
                    <A to={"/settings"} href=""><RiSettings2Line /> <span>Settings</span></A>
                </li>
                <li>
                    <A to={"/login"} href=""><RiLogoutCircleLine /> <span>Logout</span></A>
                </li>
            </ul>
        </menu>
    </nav>
  )
}

export default SideBar