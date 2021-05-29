import * as React from 'react'
import Paper from '../types/Paper'

export interface PaperPreviewProps {
    paper: Paper
}

const PaperPreview: React.SFC<PaperPreviewProps> = (props) => {
    const abbreviation_length = Math.min(props.paper.summary.length, 100)
    const abbreviated_summary = props.paper.summary
        .split(' ')
        .slice(0, abbreviation_length)
        .join(' ')
    return (
        <div className="w-full md:w-10/12 lg:w-7/12 m-auto p-8 md:p-16 border-b border-gray-light overflow-hidden">
            <a
                href={props.paper.link}
                target="_blank"
                rel="noreferrer noopener"
            >
                <div className="title text-xl mb-4">{props.paper.title}</div>
                <div className="summary text-base text-gray-dark font-body">
                    {abbreviated_summary + '...'}
                </div>
            </a>
        </div>
    )
}

export default PaperPreview
