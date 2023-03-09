import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RefInput, OnInputChange, UseEffectComponent } from './Components/OnInputChange';
import { TodoComponent, CounterComponent } from './Components/DataSharingComponent';
import { UseMemoComponent } from './Components/ReactHooksComponent'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <article>
        <UseMemoComponent />
        <CounterComponent />
        <TodoComponent />
        <UseEffectComponent />
        <OnInputChange />
        <RefInput />
      </article>
    </div>
  );
}

export default App;
