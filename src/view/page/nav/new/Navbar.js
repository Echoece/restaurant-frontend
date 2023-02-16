import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi"
import {getCurrentUser} from "../../../../service/auth/authService";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [user, setUser] = useState(getCurrentUser());

    return(
        <>
            <nav className="main-nav">
            {/* 1st logo */}
                <div className="logo">
                    <h2>
                        <span>F</span>amous
                        <span>C</span>hicken
                    </h2>
                </div>
                {/* 2nd Menu */}

                <div className ={ showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a><NavLink  to="/">Home</NavLink></a>
                        </li>
                        <li>
                            <a><NavLink  to="/menu">Menu</NavLink></a>
                        </li>
                        <li>
                            <a><NavLink  to="/contact">Contact</NavLink></a>
                        </li>
                        <li>
                            <a><NavLink  to="/about">About Us</NavLink></a>
                        </li>
                    </ul>
                </div>

                {/* 3rd Links */}

                <div className="extra-links">
                    {!user &&
                        <ul>
                            <li>
                                <a><NavLink  to="/login">Login</NavLink></a>
                            </li>
                            <li>
                                <a > <NavLink  to="/register">Register</NavLink></a>
                            </li>
                        </ul>
                    }
                    {user &&
                        <ul>
                            <li>
                                <a><NavLink  to="/profile">
                                    {user.sub.charAt(0).toUpperCase() + user.sub.slice(1)}
                                </NavLink></a>
                            </li>
                            <li>
                                <a > <NavLink  to="/logout">Logout</NavLink></a>
                            </li>
                        </ul>
                    }
                    {/* Hamburger Menu */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                    </div>
            </nav>
        </>
    );
}

export default Navbar
