
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './components/Footer';
import ProjectById from './pages/ProjectById'
import ContatoPage from './pages/ContatoPage';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <section className="App">
      <Router>
        <NavBar/>
        <AnimatedRoutes/>
        
        <Footer/>
      </Router>
   
    </section>
  );
}

export default App;
