import * as React from 'react';

export interface PaperPreviewProps {
    title: string,
    summary: string
}
 
const PaperPreview: React.SFC<PaperPreviewProps> = (props) => {
    return ( 
        <div className="w-full md:w-10/12 lg:w-7/12 m-auto p-8 md:p-16 border-b border-gray-light overflow-hidden">
            <div className="title text-xl">{ props.title }</div>
            <div className="summary text-base text-gray">{ props.summary.substring(0,500) + "..." }</div>
        </div>
    );
}
 
export default PaperPreview;