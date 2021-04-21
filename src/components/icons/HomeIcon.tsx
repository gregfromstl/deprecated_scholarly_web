import React from 'react';

export interface HomeIconProps {
    selected: boolean;
}
 
const HomeIcon: React.SFC<HomeIconProps> = ({ selected }) => {
    return ( 
        <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none" strokeWidth={selected ? 2 : 1} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    );
}
 
export default HomeIcon;