import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { defaultAction } from "./actions";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  dispatch(defaultAction());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>containers/src/App.tsx</code> and save to reload.
        </p>
        <p>
          Redux store: <code>{JSON.stringify(store)}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
