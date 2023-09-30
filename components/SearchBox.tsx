import React, { useState, useEffect, useMemo } from 'react';
import { IconType } from 'react-icons';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const TYPE_EFFECT_DELAY = 1500;

const SearchBox = () => {

    const [typedQuery, setTypedQuery] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleInputChange = (e: HTMLInputElement) => {
        const inputValue = e.value;
        setTypedQuery(inputValue);
        setIsTyping(true);
    };

    const SearchIcon: IconType = useMemo(() => {
        return isTyping ? AiOutlineLoading3Quarters : BiSearch;
    }, [isTyping]);

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            setIsTyping(false);
        }, TYPE_EFFECT_DELAY);
        return () => {
            clearTimeout(typingTimeout);
        };
    }, [typedQuery]);

    return (
        <div dir='rtl' className='inline-flex items-center relative w-full max-w-xl'>
            <input className='input w-full input-bordered' placeholder='جستجو کنید...' onChange={e => handleInputChange(e.currentTarget)} />
            <SearchIcon
                className={`absolute left-3 opacity-70 ${isTyping ? 'animate-spin' : ''
                    }`}
            />
        </div>
    );
};

export default SearchBox;
