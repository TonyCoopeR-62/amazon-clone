import React from 'react'
import './headerStyles.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

const Header = ({ items, userData }) => {
  const handleAuth = () => {
    if (userData) {
      auth.signOut()
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className="header__logo"
          src="http://www.highwaygoat.com/wp-content/uploads/2017/08/amazon_logo_RGB_W.jpg"
          alt="amazon-clone"
        />
      </Link>
      <div className="header__search">
        <input
          tabIndex={1}
          type="text"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!userData && '/login'}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne">
              {userData ? userData.email : 'Hello Guest'}
            </span>
            <div className="header__optionLineTwo">
              <span>
                {userData ? 'Log Out' : 'Sign In'}
              </span>
            </div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">
              Returns
            </span>
            <span className="header__optionLineTwo">
              Orders
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">
            Your
          </span>
          <span className="header__optionLineTwo">
            Prime
          </span>
        </div>
      </div>

      <div className="header__optionBasket">
        <Link to='/checkout'>
          <ShoppingBasketIcon className="header__optionBasketIcon"/>
        </Link>
        <span className="header__optionLineTwo header__basketCount">
          {items.length}
        </span>
      </div>


    </div>
  )
}

export default Header