import React from 'react';
import './App.css';
import CategoryPanel from './components/CategoryPanel';
import Navbar from './components/Navbar';

export interface AppProps {
  
}
 
export interface AppState {
  selected: string;
}
 
class App extends React.Component<AppProps, AppState> {
    state = { 
      selected: "Home"  
    }

    render() { 
        return ( 
            <div className="App">
                <Navbar selected={this.state.selected} />
                <CategoryPanel />
            </div>
        );
    }
}
 
export default App;

