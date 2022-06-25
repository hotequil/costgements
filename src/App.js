import logo from './logo.png';
import './App.css';

function App() {
  const name = "hotequil"

  return (
    <div className="app">
      <header className="app__header">
        <img className="app__logo" src={logo} alt="costgements logo" />
        <p className="app__title">costgements</p>
      </header>
      <main className="app__main">
        <h1 className="text-align-center">Hello guys</h1>
      </main>
      <footer className="app__footer text-align-center">Developed by {name}</footer>
    </div>
  );
}

export default App;
