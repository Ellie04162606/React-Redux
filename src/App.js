import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './components/CounterGroup';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup store={props.store}/>
      </header>
    </div>
  );
}

export default App;