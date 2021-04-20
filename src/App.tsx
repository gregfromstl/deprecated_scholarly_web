import React from 'react';
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
      })
    }

    render() { 
        return ( 
            <div className="App flex flex-row">
                <Navbar onSelect={ this.onSelect } selected={this.state.selected} />
                <ContentView />
            </div>
        );
    }
}
 
export default App;

