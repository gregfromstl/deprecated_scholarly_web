import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Guard from '../Guard/Guard'

import HomePage from '../HomePage'
import LoginPage from '../LoginPage'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <Guard>
                        <HomePage />
                    </Guard>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
