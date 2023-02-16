import React, {useState} from "react";
import './NavComponent.css'
import {getCurrentUser} from "../../../service/auth/authService";
import {Link, NavLink} from "react-router-dom";

const NavComponent = () => {
    const [user, setUser] = useState(getCurrentUser());
    return (
        <>
            <nav className="nav_wrapper">

                <Link className="nav_link" to="/">Home</Link>

                <div className="nav_links">

                    <NavLink className="nav_link" to="/menu">Menu</NavLink>

                    <NavLink className="nav_link" to="/about">Categories</NavLink>

                    <NavLink className="nav_link" to="/download">Cart</NavLink>

                    <NavLink className="nav_link" to="/web-mall">Status</NavLink>

                </div>

                <div className="nav_links">
                    {!user &&
                        <React.Fragment>

                            <NavLink className="nav_link" to="/login">Login</NavLink>

                            <NavLink className="nav_link" to="/register">Register</NavLink>

                        </React.Fragment>
                    }

                    {user &&
                        <React.Fragment>

                            <NavLink className="nav_link" to="/profile">
                                {user.sub.charAt(0).toUpperCase() + user.sub.slice(1)}
                            </NavLink>

                            <NavLink className="nav_link" to="/logout">Logout</NavLink>

                        </React.Fragment>
                    }
                </div>
            </nav>
        </>

    );
};

export default NavComponent;
