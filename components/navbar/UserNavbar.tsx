"use client";
import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import { BiShoppingBag, BiUser, BiLogOutCircle } from 'react-icons/bi';
import { MdEmojiNature, MdSettings } from 'react-icons/md';
import { BsBagHeartFill } from 'react-icons/bs';
import { FaComments } from 'react-icons/fa';
import SearchBox from '../SearchBox';

const MAX_ICON_SIZE = 24;
const USER_DROPDOWN_ID = 'userDropdown';

const ShoppingBagIcon = () => {
    return (
        <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <span className="indicator-item indicator-bottom badge badge-accent badge-sm">+۹۹</span>
                <BiShoppingBag size={MAX_ICON_SIZE + 5} />
            </div>
        </button>
    );
};

type DropdownItemProps = {
    icon: IconType;
    label: string;
};

export const DropdownItem: React.FC<DropdownItemProps> = ({ icon, label }) => {
    const IconComponent = icon;
    return (
        <li dir='rtl'>
            <a className=''>
                <IconComponent size={MAX_ICON_SIZE} />
                <span>{label}</span>
            </a>
        </li>
    );
};

const UserDropdownMenu = () => {
    const handleClickOutside = (event: MouseEvent) => {
        const element = document.querySelector(`#${USER_DROPDOWN_ID}`);
        if (element && !element.contains(event.target as Node)) {
            element.removeAttribute('open');
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleDropdownClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <li tabIndex={0} className='mr-2' onClick={handleDropdownClick}>
            <details id={USER_DROPDOWN_ID}>
                <summary className="btn btn-ghost btn-circle overflow-hidden rounded-full">
                    <BiUser size={MAX_ICON_SIZE} />
                </summary>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div className="flex flex-center flex-col items-center gap-2 justify-center avatar placeholder mb-2">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                            <span className="text-3xl">م</span>
                        </div>
                        <span>کاربر میهمان</span>
                    </div>
                    <DropdownItem icon={MdEmojiNature} label='سفارش‌ها' />
                    <DropdownItem icon={BsBagHeartFill} label='علاقه‌مندی‌ها' />
                    <DropdownItem icon={FaComments} label='دیدگاه‌ها' />
                    <DropdownItem icon={MdSettings} label='تنظیمات' />
                    <DropdownItem icon={BiLogOutCircle} label='خروج از حساب کاربری' />
                </ul>
            </details>
        </li>
    );
};

const UserNavbar = () => {
    return (
        <div className="sticky navbar bg-base-100 p-2">
            <div className="justify-start hidden md:flex">
                <ShoppingBagIcon />
                <ul className="dropdown menu menu-horizontal px-1">
                    <UserDropdownMenu />
                </ul>
            </div>
            <div className="flex-1 flex-col items-center">
                <SearchBox />
            </div>
            <div className="justify-end p-2">
                <span className='normal-case hidden md:flex text-lg font-bold'>فروشگاه لباس دنیا</span>
            </div>
        </div>
    );
};

export default UserNavbar;
