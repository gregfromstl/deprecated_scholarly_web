import React from 'react'
import PaperPreview from './PaperPreview'
import Paper from '../types/Paper'
import reading_image from '../assets/reading_image.png'
import missing_image from '../assets/missing_image.png'

export interface PaperListProps {
    papers: Paper[]
    invalid: boolean
}

const PaperList: React.SFC<PaperListProps> = (props) => {
    return (
        <div className="h-full">
            {props.papers.length > 0 ? (
                <div id="paper-list" className="h-full mt-44 md:mt-16">
                    {props.papers.map((paper) => {
                        return <PaperPreview key={paper.title} paper={paper} />
                    })}
                </div>
            ) : (
                <div className="flex w-full h-full">
                    <div className="m-auto text-center">
                        <div>
                            <img
                                className="w-52 h-52 m-auto"
                                alt="Discover the cutting edge."
                                src={
                                    props.invalid
                                        ? missing_image
                                        : reading_image
                                }
                            />
                            <div className="text-gray text-xl m-4">
                                {props.invalid
                                    ? "Oops! Looks like we're missing something. Try another search."
                                    : 'Search to discover papers.'}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PaperList
