import React from 'react';
import '../assets/camera.svg';
import { ReactComponent as Camera } from '../assets/camera.svg';
import { ReactComponent as Finance } from '../assets/finance.svg';
import { ReactComponent as Robot } from '../assets/robot.svg';
import { ReactComponent as Brain } from '../assets/brain.svg';
import CategoryButton from './CategoryButton';

export interface CategoryPanelProps {
    selectCategory: Function,
    terms: string[]
}
 
const CategoryPanel: React.SFC<CategoryPanelProps> = (props) => {
    return ( 
        <div className="shadow-right bg-white fixed w-72 h-screen text-2xl font-light top-0 left-28 p-8">
            Categories
            <div className="categories text-sm items-center flex flex-col">
                <CategoryButton onClick={ props.selectCategory } category="computer vision" active={props.terms.includes("computer vision")}>
                    <Camera className="w-12" />
                    Computer Vision
                </CategoryButton>
                <CategoryButton onClick={ props.selectCategory } category="quantitative finance" active={props.terms.includes("quantitative finance")}>
                    <Finance className="w-12" />
                    Finance
                </CategoryButton>
                <CategoryButton onClick={ props.selectCategory } category="robotics" active={props.terms.includes("robotics")}>
                    <Robot className="w-12" />
                    Robotics
                </CategoryButton>
                <CategoryButton onClick={ props.selectCategory } category="quantitative biology neuroscience" active={props.terms.includes("quantitative biology neuroscience")}>
                    <Brain className="w-12" />
                    Neuroscience
                </CategoryButton>
            </div>
        </div>
    );
}
 
export default CategoryPanel;