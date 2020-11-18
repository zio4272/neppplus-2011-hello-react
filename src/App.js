import logo from './logo.svg';
import './App.css';

function App() {
  var logo = "2.gif"
  var text = "겪하게 아무것도 하기 싫다..";
  var number = (100+30) * 7 / 7;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}<br /><span className='num'>{number}</span>
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          google
        </a>
      </header>
    </div>
  );
}

export default App;
