import React, {FC, useContext} from 'react';
import './Header.scss';
import CustomNavLink from "./UI/CustomNavLink";
import Auth from "./Auth";
import {AuthContext} from "../store/AuthContext";

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
    const {authenticated, toggleAuth} = useContext(AuthContext)
    return (
        <header className='header'>
            <div className='header__logo'>Logo</div>
            <nav className='header__nav nav'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <CustomNavLink path="/" title='Home'/>
                    </li>
                    <li className='nav__item'>
                        <CustomNavLink path="/about" title='About'/>
                    </li>
                    <li className='nav__item'>
                        <CustomNavLink path="/products" title='Products'/>
                    </li>
                    <li className='nav__item'>
                        <CustomNavLink path="/posts" title='Posts'/>
                    </li>
                </ul>
            </nav>
            <Auth auth={authenticated} toggleAuth={toggleAuth}/>
        </header>
    );
};

export default Header;
