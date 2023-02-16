import React from 'react';
import Footer from './footer/new/Footer';
import {Outlet} from "react-router";
import Navbar from "./nav/new/Navbar";

function Container() {
    return (
        <div className='container-fluid'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Container;
