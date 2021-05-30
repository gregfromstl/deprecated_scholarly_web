import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
