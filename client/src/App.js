import React from 'react';
// import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme } from './theme.js';
import { GlobalStyles } from './global.js';

class App extends React.Component {
  constructor () {
    super() 
    this.state = {
      theme: "light",
      logo: require('./giselle.png')
    }
  }
  changeTheme = () => {
    if(this.state.theme === "light") {
      this.setState({
        theme: "dark",
        logo: require('./giselledark.png')
      })
    }
    else {
      this.setState({
        theme: "light",
        logo: require('./giselle.png')
      })
    }
  };
  render() {
    const { logo, theme } = this.state;
    return (
      <div className="App" >
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
          <GlobalStyles />
        <button onClick={this.changeTheme} className="switch-box">Change my Theme!</button>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
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
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
