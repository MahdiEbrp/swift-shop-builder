'use client';
import React from 'react';
import UserNavbar from './UserNavbar';
import StoreNavbar from './StoreNavbar';

const Navbar = () => {
    return (
        <div className='flex w-full flex-col items-center justify-between shadow-md'>
            <UserNavbar />
            <StoreNavbar />
        </div>
    );
};
export default Navbar;
