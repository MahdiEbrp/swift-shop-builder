/* eslint-disable jsx-quotes */
import CitySelectionModal from '../modals/CitySelectionModal';
import React, { HTMLAttributes, useState } from 'react';
import { AccordionItemType } from '../Accordion';
import { AiFillFire } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { BsQuestionLg } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiClothes, GiHamburgerMenu } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { IconBaseProps, IconType } from 'react-icons';
import { MdOutlineWarehouse } from 'react-icons/md';
import { persianLanguage } from '@/data/persian';
import { DropdownItem } from '../DropDown';

const MAX_ICON_SIZE = 24;
type HoverButtonProps = {
    icon: IconType;
    label: string;
} & HTMLAttributes<HTMLButtonElement>;
export const HoverButton = ({ icon, label, children, ...rest }: HoverButtonProps) => {
    const Icon = icon;
    return (
        <div dir='rtl' className='dropdown dropdown-hover' tabIndex={0}>
            <button {...rest} dir='rtl' className='btn btn-ghost btn-sm inline-flex items-center gap-1'>
                <Icon size={MAX_ICON_SIZE} />
                <span>{label}</span>
            </button>
            {children}
        </div>
    );
};
type StoreButtonProps = {
    icon: IconType;
    label: string;
} & HTMLAttributes<HTMLAnchorElement>;
export const StoreButton = ({ icon, label, ...rest }: StoreButtonProps) => {
    const Icon = icon;
    return (
        <a {...rest} className='btn btn-ghost btn-sm inline-flex items-center gap-1'>
            <Icon className='opacity-60' size={MAX_ICON_SIZE} />
            <span>{label}</span>
        </a>
    );
};
type DropdownMenuProps = {
    children?: React.ReactNode;
    className?: string;
} & HTMLAttributes<HTMLUListElement>;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, className, ...rest }) => {

    const combinedClassName = `dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 ${className || ''}`;

    return (
        <ul {...rest} tabIndex={0} className={combinedClassName}>
            {children}
        </ul>
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
        <nav className='hidden flex-row md:flex bg-base-100 min-h-[1rem] p-[2px]'>
            <div className='justify-start flex-wrap'>
                <HoverButton icon={GrLocation} label={selectedCity} onClick={() => setModalOpen(true)} />
            </div>
            <CitySelectionModal isOpen={isModalOpen} handleClose={() => setModalOpen(false)} onAddressChange={handleCityChange} />
            <div dir='rtl' className='flex-1 flex-row flex-wrap justify-start gap-1 items-center'>
                <StoreButton icon={BiSolidOffer} label={persianLanguage.incredibleOffers} />
                <StoreButton icon={AiFillFire} label={persianLanguage.bestSelling} />
                <StoreButton icon={MdOutlineWarehouse} label={persianLanguage.newestItems} />
                <Divider />
                <StoreButton icon={BsQuestionLg} label={persianLanguage.haveAnyQuestion} />
            </div>
            <div className='justify-end p-1'>
                <HoverButton icon={GiHamburgerMenu} label={persianLanguage.commodityCategory}>
                    <DropdownMenu>
                        <DropdownItem icon={FaTshirt} label={persianLanguage.tShirt} />
                        <DropdownItem icon={GiClothes} label={persianLanguage.formalClothes} />
                    </DropdownMenu>
                </HoverButton>
                {/* </DropdownItem> */}
                {/* <ul className='menu bg-base-200 w-56 rounded-box'>
                            <li><a>Item 1</a></li>
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li><a>level 2 item 1</a></li>
                                        <li><a>level 2 item 2</a></li>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li><a>level 3 item 1</a></li>
                                                    <li><a>level 3 item 2</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul> */}
            </div >
        </nav >
    );
};

export default StoreNavbar;