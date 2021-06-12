import logo from './logo.svg';
import './App.css';
import './News.js';
import '.NavBar.js'


fetch('https://gnews.io/api/v4/{endpoint}27baa3eea030db2d0a5aff84b518799c');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
