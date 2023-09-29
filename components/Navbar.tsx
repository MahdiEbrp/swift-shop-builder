import React from 'react';
import { BiShoppingBag, BiUser } from 'react-icons/bi';

const MAX_ICON_SIZE = 24;

const ShoppingBagButton = () => {
    return (
        <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <span className="indicator-item indicator-bottom badge badge-accent badge-md">+99</span>
                <BiShoppingBag size={MAX_ICON_SIZE} />
            </div>
        </button>
    );
};

const UserDropdown = () => {
    return (
        <li tabIndex={0}>
            <details>
                <summary className="btn btn-ghost btn-circle overflow-hidden rounded-full">
                    <BiUser size={MAX_ICON_SIZE} />
                </summary>
                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                    <li><a>User Account</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
        </li>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 p-2">
            <div className="navbar-start">
                <ShoppingBagButton />
                <ul className="dropdown dropdown-open menu menu-horizontal px-1">
                    <UserDropdown />
                </ul>
            </div>

            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
        </nav>
    );
};

export default Navbar;
