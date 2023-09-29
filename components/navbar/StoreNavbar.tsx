import { GiClothes, GiHamburgerMenu } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { DropdownItem } from './UserNavbar';
import { FaTshirt } from 'react-icons/fa';
import { HTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

const MAX_ICON_SIZE = 24;
type HoverButtonProps = {
    icon: IconType;
    label: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export const HoverButton = ({ icon, label, children, ...rest }: HoverButtonProps) => {
    const Icon = icon;
    return (
        <div dir='rtl' className="dropdown dropdown-hover">
            <div {...rest} dir='rtl' className='btn btn-ghost btn-sm inline-flex items-center gap-1'>
                <Icon size={MAX_ICON_SIZE} />
                <span>{label}</span>
            </div>
            {children}
        </div>
    );
};


const StoreNavbar = () => {

    return (
        <nav className="navbar hidden md:flex bg-base-100 min-h-[1rem] p-[2px]">
            <div className="justify-start">
                <HoverButton icon={GrLocation} label='ارسال به شیراز,شیراز' />
            </div>
            <div className="flex-1 flex-col items-center">
            </div>
            <div className="justify-end p-1">
                <HoverButton icon={GiHamburgerMenu} label='دسته‌بندی کالاها' tabIndex={0}>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <DropdownItem icon={FaTshirt} label='تیشرت' />
                        <DropdownItem icon={GiClothes} label='لباس مجلسی' />
                    </ul>
                </HoverButton>

            </div>


        </nav>
    );
};

export default StoreNavbar;