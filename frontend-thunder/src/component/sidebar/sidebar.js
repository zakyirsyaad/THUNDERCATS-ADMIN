import { NavLink } from "react-router-dom";
import './sidebar.css'

export default function Sidebar() {

    let activeStyle = {
        textDecoration: "none",
        color: "#FFF",
        background: "#6A7FDB",
        borderRadius: "0px 10px",
        fontWeight: "500",
    };

    let inActiveStyle = {
        textDecoration: "none",
        color: "#FFF"
    };


    return (
        <header>
            <p className='brand-name'>THUNDERCATS</p>
            <p className="user-login">Hello, <span>Jeky Kazuya</span></p>
            <nav>
                <div className='navbar'>
                    <NavLink className='link' to='/dashboard' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                        <span className="material-symbols-outlined icon-link">
                            dashboard
                        </span>
                        <p>Dashboard</p>
                    </NavLink>
                </div>
                <div className='navbar'>
                    <NavLink className='link' to='/Transaksi' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                        <span class="material-symbols-outlined icon-link">
                            receipt_long
                        </span>
                        Transaksi
                    </NavLink>
                </div>
                <div className='navbar'>
                    <NavLink className='link' to='/user' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                        <span class="material-symbols-outlined icon-link">
                            contact_page
                        </span>
                        User
                    </NavLink>
                </div>
                <div className='navbar'>
                    <NavLink className='link' to='/inventaris' style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                        <span className="material-symbols-outlined icon-link">
                            inventory_2
                        </span>
                        Inventaris
                    </NavLink>
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