import React from 'react'
import Product from '../Product'
import './homeStyles.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt=""
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" 
        />
        <div className="home__row">
          <Product
            id='328674'
            title='Acer Aspire 5 Slim Laptop 15.6' 
            price={149.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX450_.jpg'
            rating={3}
          />
          <Product
            id='88865324'
            title='AmazonBasics Premium Single Monitor Stand - Lift Engine Arm Mount, Aluminum - Black'
            price={89.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81vVhNmk8JL._AC_SX466_.jpg'
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id='326574'
            title='AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'
            price={35.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SY355_.jpg'
            rating={2}
          />
          <Product
            id='27324'
            title='AmazonBasics 4-Shelf Shelving Storage Unit on 3" Wheel Casters, Metal Organizer Wire Rack, Black (36L x 14W x 57.75H)'
            price={19.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81QdKaXQ05L._AC_SY741_.jpg'
            rating={4}
          />
          <Product
            id='32411'
            title='Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)'
            price={89.99}
            image='https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SX450_.jpg'
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id='32434443'
            title='Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI &amp; VGA Port), Black'
            price={89.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SY450_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
