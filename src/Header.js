import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className = 'header'>
            <Link to='/'>
            <img className ="header_logo" 
            alt = "amazon log"
            src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className ="header_search">
                <input className = "header_searchInput" type="text"/>
                <SearchIcon className = "header_searchIcon"/>
                {/* logo */}
            </div>

            <div className ="header_nav">
                <Link to='/login'>
                <div className ="header_option"> 
                <span className ="header_optionlineOne">Hello guest</span>
                <span className ="header_optionlineTwo">Hello Sign</span>
                </div>
                </Link>
                <div className ="header_option"> 
                <span className ="header_optionlineOne">return</span>
                <span className ="header_optionlineTwo">&orders</span>
                </div>
                <div className ="header_option"> 
                <span className ="header_optionlineOne">Your</span>
                <span className ="header_optionlineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className ="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className ="header_optionlineTwo header_BasketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Header
