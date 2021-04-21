import React from 'react';

export interface SearchIconProps {
    selected: boolean;
}
 
const SearchIcon: React.SFC<SearchIconProps> = ({ selected }) => {
    return ( 
        <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none" strokeWidth={ selected ? 2 : 1} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    );
}
 
export default SearchIcon;