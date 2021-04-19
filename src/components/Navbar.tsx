import React from 'react';
import IconLogo from './IconLogo';
 
export interface NavbarProps {
    selected: string;
}
 
const Navbar: React.SFC<NavbarProps> = ({ selected }) => {
    return ( 
        <div className="blue-gradient fixed items-center flex flex-col top-0 left-0 h-screen w-28 p-8">
            <IconLogo color="white" />
            { selected }
        </div>
    );
}
 
export default Navbar;