import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <>
        <section className="contact">
            <div className="contact-heading">
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="contact-widget">

                            <div className="contact-widget-item">
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="text">
                                    <h5>Address</h5>
                                    <p>127 First Ave, Spruce Grove, AB T7X 2H4, Canada</p>
                            </div>
                        </div>

                        <div className="contact-widget-item">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="text">
                                    <h5>Contact Us</h5>
                                    <p>(780) 948-0255</p>
                            </div>
                        </div>

                        <div className="contact-widget-item">
                                <div className="icon">
                                    <i className="fa-regular fa-envelop"></i>
                                </div>
                                <div className="text">
                                    <h5>Email</h5>
                                    <p>famouschicken.support@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="column">
                        <div className="contact-form">
                            <form action="#">
                            <input type = "text" placeholder="Name"/>
                            <input type = "email" placeholder="Email"/>
                            <textarea placeholder="comment"></textarea>
                            <button type="submit" className="site-btn" onClick={(event) => {event.preventDefault();}}>Send</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="map-column">
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9483.611275411742!2d-113.9067284!3d53.5416494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539f8fc26cd384db%3A0x54102fba5f491f3b!2sFamous%20Chicken!5e0!3m2!1sen!2sbd!4v1676492038290!5m2!1sen!2sbd"
                                width="400" height="300" style="border:0;" allowFullScreen="" style={{border:0}} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        </>

    );

};

export default Contact;
