import React, { useState, useEffect, useMemo, HTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { BiSearch } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { persianLanguage } from '@/data/persian';

type SearchBoxProps = {
    disableTypingEffect?: boolean;
    typingEffectDelay?: number;
    onValueChange?: (value: string) => void;
} & HTMLAttributes<HTMLInputElement>;

const SearchBox: React.FC<SearchBoxProps> = ({ disableTypingEffect = false, typingEffectDelay = 1000, onValueChange, ...rest }) => {

    const [typedQuery, setTypedQuery] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const handleInputChange = (e: HTMLInputElement) => {
        const inputValue = e.value;
        onValueChange?.(inputValue);
        setTypedQuery(inputValue);
        if (!disableTypingEffect)
            setIsTyping(true);
    };

    const SearchIcon: IconType = useMemo(() => {
        return isTyping ? AiFillEdit : BiSearch;
    }, [isTyping]);

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            setIsTyping(false);
        }, typingEffectDelay);
        return () => {
            clearTimeout(typingTimeout);
        };
    }, [typedQuery, typingEffectDelay]);

    return (
        <div dir='rtl' className='inline-flex items-center relative max-w-xl py-3 px-4 w-full border-2 border-gray-400 rounded-md focus-visible:border-gray-400 text-sm dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 '>
            <input {...rest} className='outline-none flex-1' placeholder={persianLanguage.search} onChange={e => handleInputChange(e.currentTarget)} />
            <SearchIcon
                className={`opacity-70 mr-1 ${isTyping ? 'animate-bounce' : ''
                    }`}
            />
        </div>

    );
};

export default SearchBox;
