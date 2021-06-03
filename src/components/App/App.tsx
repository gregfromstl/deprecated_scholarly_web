import { Provider } from 'react-redux'
import store from '../../redux/store'

import './App.css'
import Router from '../Router/Router'

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Router />
            </div>
        </Provider>
    )
}

export default App
