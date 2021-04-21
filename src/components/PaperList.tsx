import React from 'react';
import PaperPreview from './PaperPreview';
import Paper from '../types/Paper';
import reading_image from '../assets/reading_image.png';


export interface PaperListProps {
    papers: Paper[];
}
 
const PaperList: React.SFC<PaperListProps> = (props) => {
    return ( 
        <div>
            {
                props.papers.length > 0 ?
                    <div className="h-full mt-16">
                        {props.papers.map((paper) => {
                            return (<PaperPreview key={paper.title} title={paper.title} summary={paper.summary} />);
                        })}
                    </div>
                    : 
                    <div className="flex w-full">
                        <div className="m-auto mt-36 md:mt-52">
                            <img className="w-52 h-52 m-auto" alt="Discover the cutting edge." src={reading_image} />
                            <div className="text-gray text-xl m-4">Search to discover papers.</div>
                        </div>
                    </div>
                
            }
        </div>
    );
}
 
export default PaperList;