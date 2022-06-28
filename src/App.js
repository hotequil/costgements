import logo from './logo.png';
import './App.css';
import HelloGuys from "./components/HelloGuys";
import DevelopedBy from "./components/DevelopedBy";
import PartnerList from "./components/lists/PartnerList";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  const partners = [
    {
      name: "Google",
      description: "Google LLC is an American multinational technology company that focuses on artificial intelligence, search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
      since: 1998,
    },
    {
      name: "Amazon",
      description: "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It has been referred to as \"one of the most influential economic and cultural forces in the world\", and is one of the world's most valuable brands.",
      since: 1994,
    },
    {
      name: "Microsoft Corporation",
      description: "Microsoft Corporation, commonly known as Microsoft, is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services headquarted at the Microsoft Redmond campus located in Redmond, Washington, United States.",
      since: 1975,
    },
  ];

  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <img className="app__logo" src={logo} alt="costgements logo" />
          <p className="app__title">costgements</p>
          <nav className="app__navigation">
            <ul className="app__links">
              <li><Link className="app__link" to="/">Home</Link></li>
              <li><Link className="app__link" to="/projects">Projects</Link></li>
              <li><Link className="app__link" to="/partners">Partners</Link></li>
            </ul>
          </nav>
        </header>
        <main className="app__main">
          <Routes>
            <Route path="/" exact element={<HelloGuys />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/partners" exact element={<PartnerList partners={partners} />} />
          </Routes>
        </main>
        <footer className="app__footer text-align-center"><DevelopedBy name="hotequil" /></footer>
      </div>
    </Router>
  );
}

export default App;
