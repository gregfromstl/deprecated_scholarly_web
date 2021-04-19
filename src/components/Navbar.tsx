import React from 'react';
 
export interface NavbarProps {
    selected: string;
}
 
const Navbar: React.SFC<NavbarProps> = ({ selected }) => {
    return ( 
        <div className="blue-gradient fixed items-center top-0 left-0 h-screen w-28 p-2">
            { selected }
        </div>
    );
}
 
export default Navbar;