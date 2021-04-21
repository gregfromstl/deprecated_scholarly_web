import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PaperList from './components/PaperList';
import SearchPanel from './components/SearchPanel';
 
export interface AppProps {}

export interface AppState {
  selected: string;
}
 
class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps | Readonly<AppProps>) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }
    
    state = { 
      selected: "Home"
    }

    private onSelect(selection: string) {
      this.setState({
        selected: selection
      });
    }

    private search() {
      console.log("Searched");
    }

    render() { 
        return ( 
            <Router>
                <div className="App flex flex-col">
                    <SearchPanel search={ this.search } />
                    <PaperList papers={[]} />
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

