import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Paper from './types/Paper';
import PaperList from './components/PaperList';
import SearchPanel from './components/SearchPanel';
import PaperService from './services/PaperService';
 
export interface AppProps {}

export interface AppState {
  papers: Paper[];
  invalid_search: boolean;
}
 
class App extends React.Component<AppProps, AppState> {
    paperService: PaperService;

    constructor(props: AppProps | Readonly<AppProps>) {
        super(props);
        this.state = {
          papers: [],
          invalid_search: false
        }
        this.paperService = new PaperService();
        this.search = this.search.bind(this);
    }

    private search(terms: string) {
        this.paperService.queryPapers(terms)
            .then((result: any) => {
                this.setState({
                    papers: result,
                    invalid_search: result.length === 0 ? true : false
                });
            })
            .catch((err: any) => {
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

