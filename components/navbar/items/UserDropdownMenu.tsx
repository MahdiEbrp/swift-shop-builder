
import DropDown, { DropdownItem } from '@/components/DropDown';
import { persianLanguage } from '@/data/persian';
import React, { useEffect, useState } from 'react';
import { BiLogOutCircle, BiUser } from 'react-icons/bi';
import { BsBagHeartFill } from 'react-icons/bs';
import { FaComments } from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';
import { MdEmojiNature, MdSettings } from 'react-icons/md';

const MAX_ICON_SIZE = 24;
const DROP_DOWN_CONTAINER_ID = 'user-dropdown-container';

const UserNameContainer = () => {
    return (
        <div className='dropdown_banner'>
            <span className='circular_avatar'>
                {persianLanguage.guestUser.substring(0,1)}
            </span>
            <span>{persianLanguage.guestUser}</span>
        </div>
    );
};
const UserDropdownMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    useEffect(() => {
        const dropdownContainer = document.querySelector('#' + DROP_DOWN_CONTAINER_ID);

        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    setMenuOpen(dropdownContainer?.classList.contains('open') || false);
                }
            });
        });

        if (dropdownContainer) {
            observer.observe(dropdownContainer, { attributes: true, attributeFilter: ['class'] });
        }

        return () => {
            if (dropdownContainer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div id={DROP_DOWN_CONTAINER_ID} className='hs-dropdown [--trigger:hover]' >
            <button id='hs-dropdown-hover-event' type='button' className='circular_btn hs-dropdown-toggle'>
                <BiUser size={MAX_ICON_SIZE} />
                <span className='sr-only'>{persianLanguage.guestUser}</span>
                <IoMdArrowDropup className={`expandable_arrow ${isMenuOpen ? 'upsidedown' : ''}`} size={32} />
            </button>
            <DropDown>
                <UserNameContainer />
                <hr className='separator' />
                <DropdownItem icon={MdEmojiNature} label={persianLanguage.orders} />
                <DropdownItem icon={BsBagHeartFill} label={persianLanguage.favorites} />
                <DropdownItem icon={FaComments} label={persianLanguage.comments} />
                <DropdownItem icon={MdSettings} label={persianLanguage.settings} />
                <hr className='separator' />
                <DropdownItem icon={BiLogOutCircle} label={persianLanguage.logout} />
            </DropDown>
        </div>
    );
};


export default UserDropdownMenu;