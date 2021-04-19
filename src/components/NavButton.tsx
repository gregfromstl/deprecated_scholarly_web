import React from 'react';
import HomeIcon from './HomeIcon';
import SearchIcon from './SearchIcon';

export interface NavButtonProps {
    onSelect: Function,
    button_type: string;
    color: string;
    selected: boolean;
}
 
const NavButton: React.SFC<NavButtonProps> = ({ onSelect, button_type, color, selected }) => {
    var icon_object;
    switch(button_type) {
        case "Home":
            icon_object = <HomeIcon color={color} selected={ selected }/>;
            break;
        case "Search":
            icon_object = <SearchIcon color={color} selected={ selected }/>;
            break;
        default:
            icon_object = <HomeIcon color={color} selected={ selected }/>;
    }

    return (
        <button onClick={ () => onSelect(button_type) } className={`text-${color} items-center flex flex-col ${selected ? "font-bold" : ""}`}>
            { icon_object }
            { button_type }
        </button> 
    );
}
 
export default NavButton;