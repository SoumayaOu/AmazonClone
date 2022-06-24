import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
          <img
          className="home__image"
          src="https://t3.ftcdn.net/jpg/01/01/82/72/360_F_101827233_lk3Z4zbgtDLVZTHi2TZLae2zuWHbFsxq.jpg"
          />
          <div className="home_row">
            <Product 
            id="12321341"
            title="The lean startup:How constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3BIWym5q5kW-7rNV4gQUTzLiYLLH0FGUADd_iM9u6oRVIY18gxxgt5WJLixXYcHctkc&usqp=CAU"
            rating={5}
            />
            <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Bakin, Stylish Kitchen Mixer with K-beater, Dough Glass Bowl "
            price={239.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER6thvvjmb_niLrt0uJ2RuTtauHuxclqlGZDgPpJ4nTfRtZ8VOlL-CMTm8Ii4pvF9-ns&usqp=CAU"

            />
            
          </div>
          <div className="home_row">
          <Product
          id="123"
          title="HAFURY Android Smart Watch, Activity Fitness Tracker for Women Men, Smartwatch for Android & iOS Phones, Heart Rate Monitor, IP68 Waterproof Fitness Watch, Sleep, Calories, Step Tracker, Black"
          price= {34.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ISEH7-4CS._AC_SL1500_.jpg"
          />
          <Product
          id="5464"
          title="Bose Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, Black"
          price={339.7}
          rating={5}
          image="https://m.media-amazon.com/images/I/81NI0UFz4zL._AC_SY550_.jpg"
          />
          <Product
          id="6563"
          title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Pink (5th Generation)"
          price={736.0}
          rating={6}
          image="https://m.media-amazon.com/images/I/61lv79X8rsL._AC_SX466_.jpg"
          />
          </div>
          <div className="home_row">
          <Product
          id="32311"
          title="SAMSUNG CH890 Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Curved, HDMI, USB-C, Height Adjustable Stand, 3 Yr WRNTY (LC34H890WGNXGO)"
          price={589.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71qkzkC7bHL._AC_SX466_.jpg"
          />
             
          </div>
      </div>
    </div>
  )
}

export default Home