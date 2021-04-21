import React from 'react';
import HomeIcon from './icons/HomeIcon';
import SearchIcon from './icons/SearchIcon';

export interface NavButtonProps {
    onSelect: Function,
    button_type: string;
    selected: boolean;
}
 
const NavButton: React.SFC<NavButtonProps> = ({ onSelect, button_type, selected }) => {
    var icon_object;
    switch(button_type) {
        case "Home":
            icon_object = <HomeIcon selected={ selected }/>;
            break;
        case "Search":
            icon_object = <SearchIcon selected={ selected }/>;
            break;
        default:
            icon_object = <HomeIcon selected={ selected }/>;
    }

    return (
        <button onClick={ () => onSelect(button_type) } className={`items-center flex flex-col ${selected ? "font-bold" : "font-light"} pt-12 m-auto`}>
            { icon_object }
            { button_type }
        </button> 
    );
}
 
export default NavButton;