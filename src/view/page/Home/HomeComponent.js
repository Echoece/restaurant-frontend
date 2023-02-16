import React from 'react';
import CarousalSlider from "./carousal/carousal";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import FeaturedProducts from "./featured/FeaturedProducts";

function HomeComponent(props) {
    return (
        <div className='container-fluid'>
            <CarousalSlider/>
            <FeaturedProducts/>
            <WhyChooseUs/>
        </div>
    );
}

export default HomeComponent;
