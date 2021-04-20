import React from 'react';
import PaperPreview from './PaperPreview';
import Paper from '../types/Paper';


export interface PaperListProps {
    papers: Paper[];
}
 
const PaperList: React.SFC<PaperListProps> = (props) => {
    return ( 
        <div className="w-full h-screen overflow-y-scroll overflow-x-hidden">
            {
                props.papers.map((paper) => {
                    return (<PaperPreview key={paper.title} title={paper.title} abstract={paper.abstract} />);
                })
            }
        </div>
    );
}
 
export default PaperList;