import React from 'react';

export interface CategoryButtonProps {
    onClick: Function;
    category: string;
    active: boolean;
}
 
const CategoryButton: React.SFC<CategoryButtonProps> = (props) => {
    return ( 
        <button onClick={() => props.onClick(props.category)} className={`text-base items-center flex flex-col mt-12 ${ props.active ? "" : "opacity-50" }`}>
            {props.children}
        </button>
    );
}
 
export default CategoryButton;