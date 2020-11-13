import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <Landing/>
    <About/>
    <Skill/>
    <Portfolio/>
    <Service/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
