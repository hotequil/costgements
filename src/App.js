import logo from './logo.png';
import './App.css';
import HelloGuys from "./components/HelloGuys";
import DevelopedBy from "./components/DevelopedBy";
import Partner from "./components/Partner";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img className="app__logo" src={logo} alt="costgements logo" />
        <p className="app__title">costgements</p>
      </header>
      <main className="app__main">
        <HelloGuys />
        <Partner />
      </main>
      <footer className="app__footer text-align-center"><DevelopedBy name="hotequil" /></footer>
    </div>
  );
}

export default App;
