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
                props.papers.length > 0 ?
                    props.papers.map((paper) => {
                        return (<PaperPreview key={paper.title} title={paper.title} summary={paper.summary} />);
                    })
                    : 
                    <div className="h-screen w-full flex">
                        <div className="text-gray-200 text-xl m-auto">Select a category to discover papers.</div>
                    </div>
                
            }
        </div>
    );
}
 
export default PaperList;