import React from 'react'
import './Header.css'
import { render } from '@testing-library/react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
function Header() {
    const [{ basket,user },dispatch]= useStateValue();
    const handleAuthentication =() => {
        if(user) {
            auth.signOut();
        }
    }
    console.log("eeeeeeeeeeeeeee",!user)
  return (
    <div className='header'>
        <Link to="/">
        <img 
         className='header__logo'
         src='https://www.seekpng.com/png/full/18-181177_amazon-logo-png-magnetic-rinse-cup-with-toothbrush.png'
         />
        </Link>
         
        <div className="header__search">
            <input
            className='header__searchInput' type="text"
            />
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className="header__nav">
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication}>
            <div className="header__option">
               <span className='header__optionLineOne'>
                   Hello  {!user?'Guest':user.email}
               </span>
               <span className='header__optionLineTwo'>
                   {user?'Sign Out':'Sign In'}
               </span>
            </div></div>
            </Link>
            <div className="header__option">
            <span className='header__optionLineOne'>
                   Returns
               </span>
               <span className='header__optionLineOne'>
                   & Orders
               </span>
            </div>
            <div className="header__option">
            <span className='header__optionLineOne'>
                   Your
               </span>
               <span className='header__optionLineTwo'>
                   Prime
               </span>
            </div>

            <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>
                   {basket?.length}
               </span>
            </div>
            </Link>
            
        </div>

         
         </div>

  )
}

export default Header