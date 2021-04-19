import React from 'react';
import './App.css';
import CategoryPanel from './components/CategoryPanel';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CategoryPanel />
      </div>
    );
  }
}

export default App;

