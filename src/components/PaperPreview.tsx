import * as React from 'react';

export interface PaperPreviewProps {
    title: string,
    summary: string
}
 
const PaperPreview: React.SFC<PaperPreviewProps> = (props) => {
    return ( 
        <div className="w-full p-8 border-b-2 border-gray-100 overflow-hidden">
            <div className="title text-xl">{ props.title }</div>
            <div className="summary text-base text-gray-300">{ props.summary.substring(0,250) + "..." }</div>
        </div>
    );
}
 
export default PaperPreview;