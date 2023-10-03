import React, { useState, useEffect, useMemo, HTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { persianLanguage } from '@/data/persian';

type SearchBoxProps = {
    disableTypingEffect?: boolean;
    typingEffectDelay?: number;
    onValueChange?: (value:string)=>void;
} & HTMLAttributes<HTMLInputElement>;

const SearchBox: React.FC<SearchBoxProps> = ({ disableTypingEffect = false, typingEffectDelay = 1500, onValueChange, ...rest }) => {

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
        return isTyping ? AiOutlineLoading3Quarters : BiSearch;
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
        <div dir='rtl' className='inline-flex items-center relative w-full max-w-xl'>
            <input {...rest} className='input w-full input-bordered' placeholder={persianLanguage.search} onChange={e => handleInputChange(e.currentTarget)}  />
            <SearchIcon
                className={`absolute left-3 opacity-70 ${isTyping ? 'animate-spin' : ''
                    }`}
            />
        </div>
    );
};

export default SearchBox;
