import bmc from '@Assets/bmc.png';
import electronLogo from '@Assets/electron.png';
import reactLogo from '@Assets/react.svg';
import './Home.scss';
import './Api';

function Home() {
  return (
    <div>
      <header className="App-Header">
        <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer">
          <img className="App-Logo" src={electronLogo} alt="Electron Logo" />
        </a>
        <p className="App-Plus">+</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img className="App-Logo" src={reactLogo} alt="React Logo" />
        </a>
      </header>
      <section className="Content">
        <h1>Welcome to</h1>
        <h2>React Electron Template!</h2>
        <div className="Link">
          <a
            href="https://github.com/AjayKanniyappan/react-electron-template#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="White-Button">
              📖 Read our docs
            </button>
          </a>
          <a href="https://www.buymeacoffee.com/ajaykanniyappan" target="_blank" rel="noreferrer">
            <button type="button" className="Bmc-Button">
              <img className="Bmc-Logo" src={bmc} alt="Buy me a coffee" /> Buy me a coffee
            </button>
          </a>
        </div>
      </section>
      <footer className="footer">
        <a href="https://ajaykanniyappan.com" target="_blank" rel="noopener noreferrer">
          Powered by&nbsp;<span>Ajay Kanniyappan</span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
