import { persianLanguage } from '@/data/persian';
import React, { KeyboardEvent, ReactNode } from 'react';
import { GrClose } from 'react-icons/gr';

export type ModalProps = {
    isOpen: boolean;
    handleClose: () => void;
    children?: ReactNode;
};


const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };

    const handleCloseEvent = () => {
        handleClose();
    };
    const ModalContainer = (props: { children: ReactNode; }) => {

        return (
            <div id='hs-focus-management-modal' className={`hs-overlay modal_container ${isOpen ? 'open' : 'hidden'}`} onKeyDown={handleKeyDown}>
                <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 modal_fade_out_properties'>
                    <div dir='rtl' className='modal-container-content'>
                        {props.children}
                    </div>
                </div>
            </div>
        );

    };
    const ModalHeader = () => {
        return (
            <>
                <div className='modal_header'>
                    <h3>
                        {persianLanguage.selectTheCity}
                    </h3>
                    <button type='button' className='circular_btn p-1' onClick={handleCloseEvent}>
                        <span className='sr-only'></span>
                        <GrClose size={24} />
                    </button>
                </div>
            </>

        );
    };
    const ModalFooter = () => {
        return (
            <div className='modal_footer'>
                <button type='button' className='btn' onClick={handleCloseEvent}>
                    {persianLanguage.close}
                </button>
            </div>
        );
    };
    const ModalContent = () => {
        return (
            <div className='p-4 overflow-y-auto'>
                {children}
            </div>
        );
    };
    return (
        <>
            <ModalContainer>
                <ModalHeader />
                <ModalContent />
                <ModalFooter />
            </ModalContainer >
            {
                isOpen &&
                <div data-hs-overlay-backdrop-template='' className='backdrop duration hs-overlay-backdrop' onClick={handleCloseEvent} />
            }
        </>
    );
};

export default Modal;
