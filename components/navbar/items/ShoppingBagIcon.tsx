import { BiShoppingBag } from 'react-icons/bi';

const MAX_ICON_SIZE = 29;

export const ShoppingBagIcon = () => {
    return (
        <button className='circular_btn' >
            <BiShoppingBag size={MAX_ICON_SIZE} />
            <span className='indicator'>+۹۹</span>
        </button>
    );
};
export default ShoppingBagIcon;
