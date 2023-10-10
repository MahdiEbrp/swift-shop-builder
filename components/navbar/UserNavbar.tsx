'use client';

import SearchBox from '../SearchBox';
import { persianLanguage } from '@/data/persian';
import ShoppingBagIcon from './items/ShoppingBagIcon';
import UserDropdownMenu from './items/UserDropdownMenu';

const UserNavbar = () => {
    return (
        <div className='sticky z-50 flex flex-row items-center justify-between w-full p-2'>
            <div className='flex-row justify-start hidden md:flex'>
                <ShoppingBagIcon />
                <div className='dropdown menu menu-horizontal px-1'>
                    <UserDropdownMenu />
                    <span className='sr-only'>{persianLanguage.user}</span>
                </div>
            </div>
            <div className='flex flex-1 flex-col items-center'>
                <SearchBox />
            </div>
            <div className='flex justify-end p-2'>
                <h1 className='normal-case hidden md:flex text-lg font-bold'>{persianLanguage.storeName}</h1>
            </div>
        </div>
    );
};

export default UserNavbar;
