import React from 'react';
import '../assets/camera.svg';
import { ReactComponent as Camera } from '../assets/camera.svg';
import CategoryButton from './CategoryButton';

export interface CategoryPanelProps {
    selectCategory: Function,
    terms: Array<string>
}
 
const CategoryPanel: React.SFC<CategoryPanelProps> = (props) => {
    return ( 
        <div className="shadow-right bg-white fixed w-72 h-screen text-2xl font-light top-0 left-28 p-8">
            Categories
            <div className="categories text-sm items-center flex flex-col mt-12">
                <CategoryButton onClick={ props.selectCategory } category="computer vision" active={props.terms.includes("computer vision")}>
                    <Camera className="w-12" />
                    Computer Vision
                </CategoryButton>
            </div>
        </div>
    );
}
 
export default CategoryPanel;