import React from "react";

import { Link } from "react-router-dom";

import CartIcon  from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart/cart-dropdown";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import {ReactComponent as  Logo} from '../../assets/crown.svg';
import { SearchBox } from "../search-box/search-box.component";

import './header.styles.scss';

const Header = ( { currentUser,hidden } ) =>(
    <div className = 'header'>
        <Logo className='logo' />
        <Link className='home' to="/home">HOME</Link>
        <SearchBox className='search'/>
            
        <div className='options'>
            
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            <Link className='option' to='/contact'>
            CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT </div>)
                :
                (<Link className = 'option' to='/signin'>
                    SIGN IN
            </Link>
           )}
           <CartIcon />
        </div>
        {hidden ? null :<CartDropdown/>
}
    </div>
)
const mapStateToProbs = ({user: {currentUser} ,cart :{ hidden}}) =>({
    currentUser,hidden
});

export default connect(mapStateToProbs)(Header);