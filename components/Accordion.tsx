import { persianLanguage } from '@/data/persian';
import React, { useState } from 'react';
import { FaCaretLeft } from 'react-icons/fa';

type AccordionItem = {
    item: string;
    subItems?: AccordionItem[];
};

type AccordionProps = {
    accordionItems: AccordionItem[];
};

const getBorderStyle = (index: number, itemCount: number): string => {
    if (itemCount === 1) {
        return 'rounded';
    } else if (index === 0) {
        return 'rounded-t-lg border-b-2';
    } else if (index === itemCount - 1) {
        return 'rounded-b-lg';
    } else {
        return 'rounded-none border-b-2';
    }
};

const Accordion: React.FC<AccordionProps> = ({ accordionItems }) => {
    const [selectedItems, setSelectedItems] = useState<AccordionItem[] | undefined>(accordionItems);

    const toggleItem = (index: number) => {
        if (selectedItems && selectedItems[index].subItems)
            setSelectedItems(selectedItems[index].subItems);
    };


    return (
        <ul className='flex flex-col w-full p-2'>
            <li className='btn-ghost cursor-pointer px-2 py-2'>
                <FaCaretLeft className='pointer-events-none opacity-75'
                    size={16}
                />
                <span>{ persianLanguage.selectTheCity}</span>
            </li>
            {selectedItems?.map((item, index) =>
                <li
                    key={`${item.item}-${index}`}
                    className={`btn-ghost ${getBorderStyle(index, selectedItems.length)} cursor-pointer px-2 py-2`}
                    onClick={() => toggleItem(index)}
                >
                    <span className='flex flex-row items-center'>
                        <span className='flex-1'>{item.item}</span>
                        <div className='justify-end'>
                            <FaCaretLeft
                                className='pointer-events-none opacity-75'
                                size={16}
                            />
                        </div>
                    </span>
                </li>
            )}
        </ul>
    );
};

export default Accordion;
