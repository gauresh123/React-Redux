import React from 'react';
import './App.css';
import Appbar from './Appbar';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {
  return (
    <main>
  <Provider store = {store}>
      <Appbar/>
  </Provider>

    </main>
  );
}

export default App;