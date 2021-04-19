import React from 'react';
import '../styles/colors.css';
import '../styles/navbar.css';
 
export interface NavbarProps {
    
}
 
const Navbar: React.SFC<NavbarProps> = () => {
    return ( 
        <div className="navbar gradient"></div>
    );
}
 
export default Navbar;