/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import NavButton from './NavButton';
import SolidIconLogo from './SolidIconLogo';

export interface NavbarProps {
    onSelect: Function;
    selected: string;
}
 
class Navbar extends React.Component<NavbarProps> {
    render() { 
        return ( 
            <div className="blue-gradient fixed items-center flex flex-col top-0 left-0 h-screen w-28 p-8">
                <SolidIconLogo color="white" />
                <NavButton onSelect={ this.props.onSelect } button_type="Home" color="white" selected={this.props.selected === "Home"}/>
                <NavButton onSelect={ this.props.onSelect } button_type="Search" color="white" selected={this.props.selected === "Search"}/>
            </div>
        );
    }
}
 
export default Navbar;
