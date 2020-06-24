import React from 'react';
import './App.css';
import { debug } from './utils/utility'
import FlixContainer from './components/containers/FlixContainer'

// import { flixListFetchAPI } from './services/api'
// import { searchQueryAPI } from './services/api'

const tag = "APP";
debug(tag, "Yoooooo this is app.js");

function App() {

  // ----  Api Hardcoded Testing ---- //
  /* flixListFetchAPI('movie', 'popular').then( data => {
    debug(tag, data);
  }); */

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Flix App</h1>
        <small>By Ravijeet Singh Ahluwalia</small>
      </header>
      <FlixContainer />
    </div>
  );
}

export default App;
