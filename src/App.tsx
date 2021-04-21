import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Paper from './types/Paper';
import PaperList from './components/PaperList';
import SearchPanel from './components/SearchPanel';
import ArxivService from './services/ArxivService';
 
export interface AppProps {}

export interface AppState {
  papers: Paper[];
  invalid_search: boolean;
}
 
class App extends React.Component<AppProps, AppState> {
    arxivService: ArxivService;

    constructor(props: AppProps | Readonly<AppProps>) {
        super(props);
        this.state = {
          papers: [],
          invalid_search: false
        }
        this.arxivService = new ArxivService();
        this.search = this.search.bind(this);
    }

    private search(terms: string) {
        this.arxivService.queryArxiv(terms)
            .then((result) => {
                this.setState({
                    papers: result,
                    invalid_search: result.length === 0 ? true : false
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    invalid_search: true
                });
            });
    }

    render() { 
        return ( 
            <Router>
                <div className="App flex flex-col">
                    <SearchPanel search={ this.search } />
                    <PaperList papers={ this.state.papers } invalid={ this.state.invalid_search } />
                </div>
            </Router>
        );
    }
}
 
export default App;

