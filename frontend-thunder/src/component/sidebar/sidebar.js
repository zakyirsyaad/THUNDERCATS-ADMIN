import { NavLink } from "react-router-dom";
import './sidebar.css'

export default function Sidebar() {

    let activeStyle = {
        textDecoration: "none",
        color: "#FFF",
        background: "#E08DAC",
        borderRadius: "0px 10px",
        padding: "10px 30px 10px 10px",
        fontWeight: "500",
        margin: "0px 0px 0px 5px",
    };

    let inActiveStyle = {
        textDecoration: "none",
        color: "#FFF"
    };


    return (
        <header>
            <p className='brand-name'>THUNDERCATS</p>
            <p className="user-login">Hello, Jeky Kazuya</p>
            <nav>
                <div className='navbar'>
                    <span className="material-symbols-outlined icon-link">
                        dashboard
                    </span>
                    <p>
                        <NavLink className='link' to='/dashboard/chart' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>Dashboard
                        </NavLink>
                    </p>
                </div>
                <div className='navbar'>
                    <span class="material-symbols-outlined icon-link">
                        receipt_long
                    </span>
                    <p>
                        <NavLink className='link' to='/dashboard/Transaksi' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>Transaksi
                        </NavLink>
                    </p>
                </div>
                <div className='navbar'>
                    <span class="material-symbols-outlined icon-link">
                        contact_page
                    </span>
                    <p>
                        <NavLink className='link' to='/dashboard/user' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>User
                        </NavLink>
                    </p>
                </div>
                <div className='navbar'>
                    <span className="material-symbols-outlined icon-link">
                        inventory_2
                    </span>
                    <p>
                        <NavLink className='link' to='/dashboard/inventaris' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>Inventaris
                        </NavLink>
                    </p>
                </div>
            </nav>
            <div className='navbar-logout'>
                <NavLink className='link-logout' to='/'>
                    <span class="material-symbols-outlined icon-link-logout">
                        move_item
                    </span>
                    Logout
                </NavLink>
            </div>
        </header>
    )
}