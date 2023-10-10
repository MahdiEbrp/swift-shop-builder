import React, { useState } from 'react';
import Accordion, { AccordionItemType } from '../Accordion';
import { provinces } from '@/data/persian';
import Modal, { ModalProps } from '../Modal';
import SearchBox from '../SearchBox';

type CitySelectionModalProps = {
    onAddressChange?: (city: AccordionItemType, province: string) => void;
} & ModalProps;

const CitySelectionModal: React.FC<CitySelectionModalProps> = ({ isOpen, handleClose, onAddressChange }) => {

    const [filter, setFilter] = useState('');

    const handleItemSelect = (city: AccordionItemType, province: string) => {
        onAddressChange?.(city, province);
        handleClose();
    };

    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            <div className='flex flex-col justify-center items-center'>
                <SearchBox disableTypingEffect onValueChange={value => setFilter(value)} />
                <Accordion accordionItems={provinces} filter={filter} onResetFilter={() => setFilter('')} onAccordionItemClick={handleItemSelect} />
            </div>
        </Modal>
    );
};

export default CitySelectionModal;
