import React, { useEffect } from "react";
import AppNavbar from "./components/AppNavBar";
import AppBody from "./components/AppBody";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import store from './store'
import { Provider } from 'react-redux'
import { loadUser } from './actions/authActions'

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <AppBody />
      </div>
    </Provider>
  );
}

export default App;
