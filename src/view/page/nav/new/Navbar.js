import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi"
import {getCurrentUser} from "../../../../service/auth/authService";
import {NavLink} from "react-router-dom";
import i from './FamousChicken.png';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [user, setUser] = useState(getCurrentUser());

    return(
        <>
        
            <nav className="main-nav sticky-top" >
            {/* 1st logo */}
                <div  className="logo mx-5 pb-2"> 
                    <img src={i} className="col-4 my-4 ms-5"  alt="Responsive image" />             
                </div>
                {/* 2nd Menu */}

                <div className ={ showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul className="mx-5 pb-2">

                    <Button variant="contained" color="error"><li>
                            <a><NavLink  to="/">Home</NavLink></a>
                        </li></Button>
                    <Button variant="contained" color="error"><li>
                            <a><NavLink  to="/menu">Menu</NavLink></a>
                        </li></Button>
                    <Button variant="contained" color="error"><li>
                            <a><NavLink  to="/contact">Contact</NavLink></a>
                        </li></Button>
                        <Button variant="contained" color="error"><li>
                            <a><NavLink  to="/about">About Us</NavLink></a>
                        </li></Button>

                        
                        
                        
                        
                    </ul>
                </div>

                {/* 3rd Links */}

                <div className="extra-links">
                    {!user &&
                        <ul className="mx-5 pb-2 col-6 col-xl-12">

                        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                            <Button><li>
                                <a><NavLink  to="/login">Login</NavLink></a>
                            </li></Button>

                            <Button><li>
                                <a><NavLink  to="/register">Register</NavLink></a>
                            </li></Button>
                        </ButtonGroup>
                            
                            
                        </ul>
                    }
                    {user &&
                        <ul className="mx-5 pb-2 col-6 col-xl-12 ">

                        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                            <Button>
                                <li>
                                    <a><NavLink  to="/profile">
                                    {console.log(user)}
                                    {user.sub.charAt(0).toUpperCase() + user.sub.slice(1).substring(0, user.sub.slice(1).indexOf('@'))}
                                    </NavLink></a>
                                </li>
                            </Button>

                            <Button> 
                                <li>
                                    <a > <NavLink  to="/logout">Logout</NavLink></a>
                                </li>
                            </Button>
                        </ButtonGroup>

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
