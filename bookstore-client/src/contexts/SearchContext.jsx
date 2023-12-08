import React, { createContext, useState, useContext } from 'react';
const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
        );
    };

    export const useSearch = () => {
        const context = useContext(SearchContext);
        if (!context) { 
            throw new Error('useSearch must be used within a SearchProvider'); 
        } 
        return context; 
    };
    