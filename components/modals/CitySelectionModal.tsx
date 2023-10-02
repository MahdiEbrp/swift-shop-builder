import React from 'react';
import Accordion, { AccordionItemType } from '../Accordion';
import { persianLanguage, provinces } from '@/data/persian';
import Modal, { ModalProps } from '../Modal';

type CitySelectionModalProps = {
    onAddressChange?: (city: AccordionItemType, province: string) => void;
} & ModalProps;

const CitySelectionModal: React.FC<CitySelectionModalProps> = ({ isOpen, handleClose, onAddressChange }) => {

    const handleItemSelect = (city: AccordionItemType, province: string) => {
        onAddressChange?.(city, province);
        handleClose();
    };

    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-lg font-bold'>{persianLanguage.selectTheCity}</h3>
                <Accordion accordionItems={provinces} onAccordionItemClick={handleItemSelect} />
            </div>
        </Modal>
    );
};

export default CitySelectionModal;
