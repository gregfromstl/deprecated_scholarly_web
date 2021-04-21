import React from 'react';
import NavButton from './NavButton';
import SolidIconLogo from './icons/SolidIconLogo';

export interface NavbarProps {
    onSelect: Function;
    selected: string;
}
 
class Navbar extends React.Component<NavbarProps> {
    render() { 
        return ( 
            <div className="blue-gradient items-center flex flex-col top-0 left-0 h-screen w-28 p-4">
                <SolidIconLogo color="white" />
                <div className="mt-16">
                    <NavButton onSelect={ this.props.onSelect } button_type="Home" selected={this.props.selected === "Home"}/>
                    <NavButton onSelect={ this.props.onSelect } button_type="Search" selected={this.props.selected === "Search"}/>
                </div>
            </div>
        );
    }
}
 
export default Navbar;
