import React,{Fragment,useState} from 'react'
import "./About.css"

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Foods</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Achievements</h2>
    </div>

    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>About Us</h2>
      <p> Famous Chicken is a premier destination for mouthwatering chicken dishes, juicy burgers, savory pizzas, delicious ice cream, aromatic rice dishes, famous donairs,
        Indo-Chinese soups, and an extensive selection of delicious vegetarian dishes. We take great pride in using only the freshest and highest-quality ingredients to create
        our dishes. Our skilled chefs use their years of experience and passion for cooking to bring the flavors of India, China, and beyond to your plate. From the juicy,
        crispy chicken in our famous chicken dishes to the rich and flavorful vegetarian options, every dish is crafted with care and attention to detail. In addition to our
        delicious food, we also offer a welcoming and relaxed dining atmosphere. </p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Our Foods</h2>
      <p>At Famous Chicken, we are passionate about creating delicious, high-quality food that our customers will love. Our menu offers a diverse range of options, from our famous chicken dishes to our juicy burgers, savory pizzas, and delicious vegetarian options. Our skilled chefs draw inspiration from flavors and techniques from around the world to create dishes that are bursting with flavor and aroma. We take pride in using only the best ingredients in our cooking. Our chicken is always fresh and never frozen, and we use premium cuts of beef for our burgers. We also use a range of fresh vegetables and herbs to add flavor and nutrition to our dishes. One of the things that sets us apart is our commitment to offering a wide range of options to accommodate all dietary needs and preferences.</p>

    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

      <div className="exp-column">
        <h3>Serving our community for over a decade:</h3>
        <p>We have been a part of the local community for over 10 years and have built a loyal following of customers who return to us time and
          time again for our delicious food and exceptional service..</p>
      </div>

      <div className="exp-column">
        <h3>Using only the freshest, highest-quality ingredients:</h3>
        <p>We are committed to using only the best ingredients in our cooking. From fresh, never frozen chicken to premium cuts of beef and the freshest vegetables and herbs,
          we take pride in using only the freshest, highest-quality ingredients in our dishes.</p>
      </div>

      <div className="exp-column">
        <h3>Offering a diverse range of options to accommodate all dietary needs</h3>
        <p>We believe that everyone should be able to enjoy delicious food, regardless of their dietary preferences or restrictions. That's why we offer a wide range of
          vegetarian and vegan dishes, as well as options for those with gluten-free or other dietary needs</p>
      </div>

      <div className="exp-column">
        <h3>Providing exceptional service and hospitality</h3>
        <p>At Famous Chicken, we are committed to providing our customers with the highest level of hospitality and service. From the moment you walk through our doors,
          you'll be greeted with a warm smile and a friendly welcome. Our team is dedicated to making your dining experience as enjoyable and memorable as possible.</p>
      </div>

      <div className="exp-column">
        <h3>Creating a welcoming and relaxed atmosphere</h3>
        <p>At Famous Chicken, we are committed to providing our customers with the highest level of hospitality and service. From the moment you walk through our doors,
          you'll be greeted with a warm smile and a friendly welcome. Our team is dedicated to making your dining experience as enjoyable and memorable as possible.</p>
      </div>
    </div></div></div></div>
    </section>

    </Fragment>
  )
}

export default About;
