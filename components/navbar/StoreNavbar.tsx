import CitySelectionModal from '../modals/CitySelectionModal';
import DropDown, { DropdownItem } from '../DropDown';
import React, { HTMLAttributes, useState } from 'react';
import { AccordionItemType } from '../Accordion';
import { AiFillFire } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { BsQuestionLg } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiClothes, GiHamburgerMenu } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { IconType } from 'react-icons';
import { MdOutlineWarehouse } from 'react-icons/md';
import { persianLanguage } from '@/data/persian';

const MAX_ICON_SIZE = 24;
const DROP_DOWN_CONTAINER_ID = 'store-dropdown-container';

type HoverButtonProps = {
    icon: IconType;
    label: string;
} & HTMLAttributes<HTMLButtonElement>;
export const HoverButton = ({ icon, label, children, ...rest }: HoverButtonProps) => {
    const Icon = icon;
    return (
        <button dir='rtl' id='hs-dropdown-hover-event' type='button' className='btn hs-dropdown-toggle' {...rest}>
            <Icon size={MAX_ICON_SIZE} />
            <span>{label}</span>
            {children}
        </button>
    );
};
type StoreNavbarItemProps = {
    icon: IconType;
    label: string;
} & HTMLAttributes<HTMLAnchorElement>;
export const StoreNavbarItem = ({ icon, label, ...rest }: StoreNavbarItemProps) => {
    const Icon = icon;
    return (
        <a {...rest} className='btn gap-1'>
            <Icon className='opacity-60' size={MAX_ICON_SIZE} />
            <span>{label}</span>
        </a>
    );
};

const Divider = () => {
    return <div className='h-[20px] bg-neutral-content w-[2px]' />;
};

const StoreNavbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(persianLanguage.pleaseSelectYourCity);
    const handleCityChange = (selectedItem: AccordionItemType, province: string) => {
        const city = selectedItem.label;
        const cityWithProvince = province ? `${province},${city}` : city;
        setSelectedCity(cityWithProvince);
    };
    return (
        <nav id='store_bar' className='store_navbar'>
            <div id='left_side_store_bar' className='left_side_store_bar'>
                <HoverButton icon={GrLocation} label={selectedCity} onClick={() => setModalOpen(true)} />
            </div>
            <CitySelectionModal isOpen={isModalOpen} handleClose={() => setModalOpen(false)} onAddressChange={handleCityChange} />
            <div id='middle_side_store_bar' dir='rtl' className='middle_side_store_bar'>
                <StoreNavbarItem icon={BiSolidOffer} label={persianLanguage.incredibleOffers} />
                <StoreNavbarItem icon={AiFillFire} label={persianLanguage.bestSelling} />
                <StoreNavbarItem icon={MdOutlineWarehouse} label={persianLanguage.newestItems} />
                <Divider />
                <StoreNavbarItem icon={BsQuestionLg} label={persianLanguage.haveAnyQuestion} />
            </div>
            <div id='right_side_store_bar' className='flex justify-end p-1'>
                <div id={DROP_DOWN_CONTAINER_ID} className='hs-dropdown [--trigger:hover]' >
                    <HoverButton icon={GiHamburgerMenu} label={persianLanguage.commodityCategory} />
                    <DropDown>
                        <DropdownItem icon={FaTshirt} label={persianLanguage.tShirt} />
                        <DropdownItem icon={GiClothes} label={persianLanguage.formalClothes} />
                    </DropDown>
                </div>
            </div >
        </nav >
    );
};

export default StoreNavbar;