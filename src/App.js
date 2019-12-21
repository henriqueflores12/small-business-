import React from 'react';
import Navigation from './container/loginNave'
import './App.css'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  console.log(process.env.REACT_APP_MAP_KEY)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;