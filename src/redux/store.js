import { createStore } from 'redux'
import reducers from './reducers'
import state from './state'

export default createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())