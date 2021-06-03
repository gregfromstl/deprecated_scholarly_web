import { createStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/RootReducer'

const store = createStore(rootReducer)
export default store
