import React from 'react';
import CategoryPanel from './CategoryPanel';

export interface ContentViewProps {
    
}
 
export interface ContentViewState {
    terms: string[];
}
 
class ContentView extends React.Component<ContentViewProps, ContentViewState> {
    constructor(props: ContentViewProps | Readonly<ContentViewProps>) {
        super(props);
        this.state = { 
            terms:  []
        }
        this.toggleTerm = this.toggleTerm.bind(this);
        this.addTerms = this.addTerms.bind(this);
        this.removeTerm = this.removeTerm.bind(this);
    }

    private toggleTerm(term: string) {
        const index = this.state.terms.indexOf(term);
        if (index > -1) {
            this.removeTerm(index);
        } else {
            this.addTerms([term]);
        }
    }

    private addTerms(terms: string[]) {
        this.setState({
            terms: [
                ...terms,
                ...this.state.terms
            ]
        });
    }

    private removeTerm(index: number) {
        var terms = this.state.terms;
        terms.splice(index, 1);
        this.setState({
            terms: terms,
        })
    }

    render() { 
        return ( 
            <div>
                <CategoryPanel terms={ this.state.terms } selectCategory={ this.toggleTerm } />
            </div>
        );
    }
}
 
export default ContentView;