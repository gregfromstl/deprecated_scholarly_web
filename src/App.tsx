import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ContentView from './components/ContentView';
import Navbar from './components/Navbar';
 
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

    render() { 
        return ( 
            <Router>
                <div className="App flex flex-row">
                      <Navbar onSelect={ this.onSelect } selected={ this.state.selected } />
                      <Switch>
                          <Route path="/"><ContentView selected={ this.state.selected }/></Route>
                      </Switch>
                </div>
            </Router>
        );
    }
}
 
export default App;

