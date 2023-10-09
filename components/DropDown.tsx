import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

const MAX_ICON_SIZE = 24;

type DropdownItemProps = {
    icon?: IconType;
    label: string;
    onClick?: () => void;
    iconSize?:number
} & HTMLAttributes<HTMLAnchorElement>;

export const DropdownItem: React.FC<DropdownItemProps> = ({ icon, label, iconSize = MAX_ICON_SIZE, onClick, ...rest }) => {
    const IconComponent = icon;

    const handleClick = () => {
        onClick?.();
    };

    return (
        <a className='dropdown_item' href='#' onClick={handleClick} {...rest}>
            {IconComponent && <IconComponent size={iconSize} />}
            {label}
        </a>
    );
};
type DropdownProps = {
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const DropDown: FC<DropdownProps> = ({ children, ...rest }) => {

    return (
        <div dir='rtl' className='hs-dropdown-menu dropdown_container'aria-labelledby='hs-dropdown-hover-event'{...rest}>
            {children}
        </div>
    );
};

export default DropDown;