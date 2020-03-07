import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <Link to="/">
          <img src={require('./giselle.png')} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="nav-bar">
        <Link to="/about"> About </Link>{" "}
        <Link to="/projects"> Projects </Link>{" "}
        <Link to="/skills"> Skills </Link>{" "}

        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
