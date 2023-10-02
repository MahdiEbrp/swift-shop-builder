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
    const [selectedItemsHistory, setSelectedItemsHistory] = useState<AccordionItem[][]>([]);

    const toggleItem = (index: number) => {
        if (selectedItems && selectedItems[index].subItems) {
            const newSelectedItems = selectedItems[index].subItems;
            setSelectedItemsHistory([...selectedItemsHistory, selectedItems]);
            setSelectedItems(newSelectedItems);
        }
    };
    const handleGoBack = () => {
        if (selectedItemsHistory.length > 0) {
            const prevSelectedItems = selectedItemsHistory.pop() || [];
            setSelectedItems(prevSelectedItems);
        }
    };

    return (
        <ul className='flex flex-col w-full p-2'>
            {selectedItemsHistory.length > 0 &&
                <li className='flex flex-row cursor-pointer px-2 py-2 gap-1' onClick={handleGoBack}>
                    <FaCaretLeft className='pointer-events-none opacity-75 rotate-180'
                        size={16}
                    />
                    <span>{persianLanguage.back}</span>
                </li>
            }

            {selectedItems?.map((item, index) =>
                <li
                    key={`${item.item}-${index}`}
                    className={`bg-base-200 slideInRight ${getBorderStyle(index, selectedItems.length)} cursor-pointer px-2 py-2 `}
                    style={{animationDelay:`${index*100}ms`}}
                    onClick={() => toggleItem(index)}
                >
                    <span className='flex flex-row items-center'>
                        <span className='flex-1'>{item.item}</span>
                        {item.subItems &&
                            <span className='justify-end'>
                                <FaCaretLeft
                                    className='pointer-events-none opacity-75'
                                    size={16}
                                />
                            </span>
                        }
                    </span>
                </li>
            )}
        </ul>
    );
};

export default Accordion;
