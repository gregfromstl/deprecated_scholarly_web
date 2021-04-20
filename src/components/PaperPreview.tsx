import * as React from 'react';

export interface PaperPreviewProps {
    title: string,
    abstract: string
}
 
const PaperPreview: React.SFC<PaperPreviewProps> = (props) => {
    return ( 
        <div className="w-full p-8 border-b-2 border-gray-100 overflow-hidden">
            <div className="title text-xl">{ props.title }</div>
            <div className="abstract text-base text-gray-300">{ props.abstract.substring(0,250) + "..." }</div>
        </div>
    );
}
 
export default PaperPreview;