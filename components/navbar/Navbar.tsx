'use client';
import React from 'react';
import UserNavbar from './UserNavbar';
import StoreNavbar from './StoreNavbar';

const Navbar = () => {
    return (
        <div id='main_navbar' className='navbar'>
            <UserNavbar />
            <StoreNavbar />
        </div>
    );
};
export default Navbar;
