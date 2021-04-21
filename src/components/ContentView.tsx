import React from 'react';
import ArxivService from '../services/ArxivService';
import CategoryPanel from './CategoryPanel';
import PaperList from './PaperList';
import Paper from '../types/Paper';
import SearchPanel from './SearchPanel';

export interface ContentViewProps {
    selected: string;
}
 
export interface ContentViewState {
    terms: string[];
    papers: Paper[];
}
 
class ContentView extends React.Component<ContentViewProps, ContentViewState> {
    arxivService: ArxivService;

    constructor(props: ContentViewProps | Readonly<ContentViewProps>) {
        super(props);
        this.state = { 
            terms:  [],
            papers: []
        }
        this.arxivService = new ArxivService();
        this.submitSearch = this.submitSearch.bind(this);
        this.toggleTerm = this.toggleTerm.bind(this);
        this.addTerms = this.addTerms.bind(this);
        this.removeTerm = this.removeTerm.bind(this);
    }

    private submitSearch(terms: string[] | string) {
        terms = typeof(terms) === "string" ? [terms] : terms; 
        this.arxivService.queryArxiv(terms)
            .then((result) => {
                this.setState({
                    papers: result
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    private async toggleTerm(term: string) {
        const index = this.state.terms.indexOf(term);
        if (index > -1) {
            await this.removeTerm(index);
        } else {
            await this.addTerms([term]);
        }
        this.submitSearch(this.state.terms);
    }

    private async addTerms(terms: string[]) {
        await this.setState({
            terms: [
                ...terms,
                ...this.state.terms
            ]
        });
    }

    private async removeTerm(index: number) {
        var terms = this.state.terms;
        terms.splice(index, 1);
        await this.setState({
            terms: terms,
        })
    }

    render() { 
        return ( 
            <div className="w-full flex flex-row">
                <div className="shadow-right bg-white w-96 h-screen text-2xl font-light top-0 left-28 p-8">
                    {
                        this.props.selected === "Home" ?
                            <CategoryPanel terms={ this.state.terms } selectCategory={ this.toggleTerm } />
                            : <SearchPanel search={ this.submitSearch } />
                    }
                </div>
                <PaperList papers={ this.state.papers } />
            </div>
        );
    }
}
 
export default ContentView;