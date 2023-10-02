import { GiClothes, GiHamburgerMenu } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { DropdownItem } from './UserNavbar';
import { FaTshirt } from 'react-icons/fa';
import React, { HTMLAttributes, ReactNode, useState } from 'react';
import { IconType } from 'react-icons';
import { persianLanguage } from '@/data/persian';
import CitySelectionModal from '../modals/CitySelectionModal';
import { AccordionItemType } from '../Accordion';

const MAX_ICON_SIZE = 24;
type HoverButtonProps = {
    icon: IconType;
    label: string;
    children?: ReactNode;
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
const StoreNavbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(persianLanguage.pleaseSelectYourCity);
    const handleCityChange = (selectedItem: AccordionItemType, province: string) => {
        const city = selectedItem.label;
        const cityWithProvince = province ? `${province},${city}` : city;
        setSelectedCity(cityWithProvince);
    };
    return (
        <nav className='navbar hidden md:flex bg-base-100 min-h-[1rem] p-[2px]'>
            <div className='justify-start'>
                <HoverButton icon={GrLocation} label={selectedCity} onClick={() => setModalOpen(true)} />
            </div>
            <CitySelectionModal isOpen={isModalOpen} handleClose={() => setModalOpen(false)} onAddressChange={handleCityChange} />
            <div className='flex-1 flex-col items-center'>
            </div>
            <div className='justify-end p-1'>
                <HoverButton icon={GiHamburgerMenu} label={persianLanguage.commodityCategory}>
                    <DropdownMenu>
                        <DropdownItem icon={FaTshirt} label={persianLanguage.tShirt} />
                        <DropdownItem icon={GiClothes} label={persianLanguage.formalClothes} />
                    </DropdownMenu>
                </HoverButton>

            </div>


        </nav >
    );
};

export default StoreNavbar;