import React from 'react';
import a from './icon-serv-1.png';
import b from './icon-serv-2.png';
import c from './icon-serv-3.png';


function WhyChooseUs() {
    return (
        <div className="container">
            <hr/>
            <h1 className="text-center my-5" style={{fontSize: '35px'}} >Why People Chose Us</h1>
            <p style={{fontSize: '20px'}}>At Famous Chicken, we believe that great food is not just about taste, but about the entire dining
                experience. That's why we take pride in offering a unique and memorable dining experience for our
                guests. Here are a few reasons why you should choose us:</p>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="">
                        <div className="col-6 col-md-6 col-lg-4 my-4">
                            <img src={a} className="card-img-top" alt="..."/>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title " style={{fontSize: '25px'}}>Menu for Every Taste</h5>
                            <p className="card-text" style={{fontSize: '15px'}} >Our menu offers a diverse array of dishes that are sure to satisfy
                                any craving. We offer options for those following a vegetarian diet as well. From
                                mouthwatering chicken dishes to juicy burgers, savory pizzas, aromatic rice dishes,
                                famous donairs, Indo-Chinese soups, and delicious ice cream, we have something for
                                everyone. Our chefs use a range of ingredients and cooking techniques from around the
                                world to create dishes that are bursting with flavor and aroma.</p>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="">
                        <div className="col-6 col-md-6 col-lg-4 my-4">
                            <img src={b} className="card-img-top" alt="..."/>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: '25px'}}>Always Fresh Ingredients</h5>
                            <p className="card-text" style={{fontSize: '15px'}}>We take great pride in using only the freshest and highest-quality
                                ingredients to create our dishes. We use fresh, never frozen chicken for our famous
                                chicken dishes, and premium cuts of beef for our burgers. We also use a range of fresh
                                vegetables and herbs to add flavor and nutrition to our dishes. Our ingredients are
                                carefully sourced and prepared to ensure that each dish is as delicious as possible.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="">
                        <div className="col-6 col-md-6 col-lg-4 my-4">
                            <img src={c} className="card-img-top" alt="..."/>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: '25px'}}>Experienced Chefs</h5>
                            <p  style={{fontSize: '15px'}}>Our skilled chefs are experienced in a range of cooking techniques
                                and draw inspiration from a range of culinary traditions. They use their expertise to
                                create dishes that are as visually stunning as they are delicious. Whether you're in the
                                mood for a rich and savory dish, or something light and refreshing, our chefs have got
                                you covered.</p>

                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default WhyChooseUs;
