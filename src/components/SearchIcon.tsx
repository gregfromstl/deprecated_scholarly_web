import React from 'react';

export interface SearchIconProps {
    color: string;
    selected: boolean;
}
 
const SearchIcon: React.SFC<SearchIconProps> = ({ color, selected }) => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none" stroke={ color } strokeWidth={ selected ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    );
}
 
export default SearchIcon;