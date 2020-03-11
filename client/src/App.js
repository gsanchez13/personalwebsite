import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import SwitchBox from'./Components/Switch';

function App() {
  return (
    <div className="App">
      <SwitchBox/>
        <div className="logo-container">
          <Link to="/">
            <img src={require('./giselle.png')} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-container">
          <NavBar />
        </div>
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
          </Switch>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
    </div>
      );
    }
    
    export default App;
