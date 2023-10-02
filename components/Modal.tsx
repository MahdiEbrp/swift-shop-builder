import { persianLanguage } from '@/data/persian';
import React, { KeyboardEvent, MouseEvent } from 'react';

export type ModalProps = {
    isOpen: boolean;
    handleClose: () => void;
    children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };

    const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const targetElement = e.target as HTMLElement;
        const modalElement = document.querySelector('.modal-box');

        if (modalElement && !modalElement.contains(targetElement)) {
            handleClose();
        }
    };

    return (
        <div onClick={handleClickOutside} onKeyDown={handleKeyDown}>
            <div dir='rtl' className={`modal ${isOpen ? 'modal-open' : ''}`}>
                <div className='modal-box'>
                    {children}
                    <div className='modal-action'>
                        <label htmlFor='main_modal' className='btn' onClick={handleClose}>
                            {persianLanguage.close}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
