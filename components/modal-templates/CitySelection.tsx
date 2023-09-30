import React from 'react';
import Accordion from '../Accordion';
import { persianLanguage } from '@/data/persian';


const fakeAccordionData = [
    {
        item: 'Item 1',
        subItems: [
            { item: 'Subitem 1.1' },
            { item: 'Subitem 1.2' },
            { item: 'Subitem 1.3' }
        ]
    },
    {
        item: 'Item 2',
        subItems: [
            { item: 'Subitem 2.1' },
            { item: 'Subitem 2.2' }
        ]
    },
    {
        item: 'Item 3'
    }
];


const CitySelection = () => {

    return (
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-lg font-bold'>{persianLanguage.selectTheCity}</h3>
            <Accordion accordionItems={fakeAccordionData} />
        </div>
    );
};

export default CitySelection;