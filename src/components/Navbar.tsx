import React from 'react';
import '../styles/colors.css';
import '../styles/navbar.css';
 
export interface NavbarProps {
    
}
 
const Navbar: React.SFC<NavbarProps> = () => {
    return ( 
        <div className="blue-gradient fixed items-center top-0 left-0 h-screen w-28 p-2"></div>
    );
}
 
export default Navbar;