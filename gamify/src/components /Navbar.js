// Navbar.js
import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import LogoFront from './LogoFront';

const Navbar = () => {
    return (
        <nav>
            <LogoFront />
            <NavLinks />
        </nav>
    );
};

export default Navbar;