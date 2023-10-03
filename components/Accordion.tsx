import { persianLanguage } from '@/data/persian';
import React, { useMemo, useState } from 'react';
import { FaCaretLeft } from 'react-icons/fa';
export type AccordionItemType = {
    label: string;
    id: string;
    subItems?: AccordionItemType[];
};

type AccordionProps = {
    accordionItems: AccordionItemType[];
    filter?: string;
    onResetFilter?: () => void;
    onAccordionItemClick?: (item: AccordionItemType, itemPath: string) => void;
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

const Accordion: React.FC<AccordionProps> = ({ accordionItems, onResetFilter,filter='', onAccordionItemClick }) => {
    const [selectedAccordionItems, setSelectedAccordionItems] = useState<AccordionItemType[] | undefined>(accordionItems);
    const [accordionHistory, setAccordionHistory] = useState<AccordionItemType[]>([]);


    const filteredItems = useMemo(() => {
        if (filter)
            return selectedAccordionItems?.filter(item => item.label.toLowerCase().includes(filter.toLowerCase()));
        else
            return selectedAccordionItems;
    }, [filter, selectedAccordionItems]);
    const toggleAccordionItem = (index: number) => {
        if (filteredItems ) {
            const SelectedAccordionItem = filteredItems[index];
            if (SelectedAccordionItem.subItems) {
                setAccordionHistory([...accordionHistory, SelectedAccordionItem]);
                setSelectedAccordionItems(SelectedAccordionItem.subItems);
                onResetFilter?.();
            }
            else
                handleAccordionItemClick(SelectedAccordionItem);
        }
    };
    const handleGoBack = () => {
        accordionHistory.pop();
        if (accordionHistory.length === 0)
            setSelectedAccordionItems(accordionItems);
        else
            setSelectedAccordionItems(accordionHistory[accordionHistory.length - 1].subItems);
        setAccordionHistory(accordionHistory);
    };

    const handleAccordionItemClick = (currentItem: AccordionItemType) => {
        const accordionItemLabels = accordionHistory.map(accordionItem => accordionItem.label).join(',');
        onAccordionItemClick?.(currentItem, accordionItemLabels);
    };
    return (
        <ul className='flex flex-col w-full p-2'>
            {accordionHistory.length > 0 &&
                <li className='flex flex-row cursor-pointer px-2 py-2 gap-1' onClick={handleGoBack}>
                    <FaCaretLeft className='pointer-events-none opacity-75 rotate-180'
                        size={16}
                    />
                    <span>{persianLanguage.back}</span>
                </li>
            }

            {filteredItems?.map((item, index) =>
                <li
                    key={`${item.id}-${index}`}
                    className={`bg-base-200 slideInRight ${getBorderStyle(index, filteredItems.length)} cursor-pointer px-2 py-2 `}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => toggleAccordionItem(index)}
                >
                    <span className='flex flex-row items-center'>
                        <span className='flex-1'>{item.label}</span>
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
