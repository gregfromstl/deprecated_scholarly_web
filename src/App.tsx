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
}
 
class App extends React.Component<AppProps, AppState> {
    arxivService: ArxivService;

    constructor(props: AppProps | Readonly<AppProps>) {
        super(props);
        this.state = {
          papers: []
        }
        this.arxivService = new ArxivService();
        this.search = this.search.bind(this);
    }

    private search(terms: string) {
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

    render() { 
        return ( 
            <Router>
                <div className="App flex flex-col">
                    <SearchPanel search={ this.search } />
                    <PaperList papers={ this.state.papers } />
                    {/* <Navbar onSelect={ this.onSelect } selected={ this.state.selected } />
                    <Switch>
                        <Route path="/"><ContentView selected={ this.state.selected }/></Route>
                    </Switch> */}
                </div>
            </Router>
        );
    }
}
 
export default App;

