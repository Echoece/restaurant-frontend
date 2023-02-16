import React from "react";
import "./Footer.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="footer-col">
                            <h4>About</h4>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Our Services</a></li>
                                <li><a href="">Our Foods</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Order Status</a></li>
                                <li><a href="">Payment Option</a></li>
                                <li><a href="">Contact With Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Book Us</h4>
                            <ul>
                                <li><a href="">Our Cuisins</a></li>
                                <li><a href="">Our Restuarent</a></li>
                                <li><a href="">Visit Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Follow Us</h4>
                                <div className="social-links">
                                    <li><a href="https://www.facebook.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa"><FaFacebookSquare className="facebook" />FaceBook</a></li>
                                    <li><a href="https://www.instagram.com/thapatechnical/" target="_thapa"><FaInstagramSquare className="instagram" />Instagram</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa"><FaYoutubeSquare className="youtube" />YouTube</a></li>
                                </div>
                        </div>

                    </div>
                </div>

            </footer>
        </>

    );

};

export default Footer;
