import { persianLanguage } from '@/data/persian';
import React, { useEffect } from 'react';

type ModalProps = {
    isOpen: boolean;
    handleClose: () => void;
    children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        const modal = document.querySelector('.modal-box');
        if (modal && !modal.contains(event.target as Node)) {
            handleClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
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
    );
};

export default Modal;
