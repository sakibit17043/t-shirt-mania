import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
             <h2>Welcome to TShirt Mania!!!</h2>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='orderreview'>Order Review</CustomLink>
                <CustomLink to='grandpa'>GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;