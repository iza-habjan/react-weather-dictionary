import logo from "./logo.png";
import "./App.css";

import Footer from "./Footer";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="Iza-Habjan-logo" />
      <Projects />
      <Footer />
    </div>
  );
}
