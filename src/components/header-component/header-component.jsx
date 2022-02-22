import React from "react";

//import { Link } from "react-router-dom";

import CartIcon  from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import { auth } from "../../firebase/firebase.utils";
import {ReactComponent as  Logo} from '../../assets/crown.svg';
import SearchBox from '../search-box/search-box.component';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { HeaderContainer,
    LogoContainer,OptionsContainer,
    OptinLink } from "./header.styles";

const Header = ( { currentUser,hidden } ) =>(
    <HeaderContainer>
        <LogoContainer to='/' >
            <Logo className="logo" />
        </LogoContainer>
        <SearchBox className='search'/>
        <OptionsContainer >   
        <OptinLink to="/home">HOME</OptinLink>

            <OptinLink to='/shop'>
            SHOP
            </OptinLink>
            <OptinLink to='/contact'>
            CONTACT
            </OptinLink>
            {
                currentUser ? (
                <OptinLink  as='div' onClick={()=> auth.signOut()}>SIGN OUT </OptinLink>)
                :
            (<OptinLink to='/signin'>
                    SIGN IN
            </OptinLink>
           )}
           <CartIcon />
        </OptionsContainer>
        {hidden ? null :<CartDropdown/>
}
    </HeaderContainer>
)
const mapStateToProbs = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToProbs)(Header);