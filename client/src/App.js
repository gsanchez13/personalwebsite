import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
// import SwitchBox from './Components/Switch';

class App extends React.Component {
  constructor () {
    super() 
    this.state = {
      mode: "light",
      logo: require('./giselle.png')
    }
  }
  changeTheme = () => {
    if(this.state.mode === "light") {
      this.setState({
        mode: "dark",
        logo: require('./giselledark.png')
      })
    }
    else {
      this.setState({
        mode: "light",
        logo: require('./giselle.png')
      })
    }
  };
  render() {
    const { logo } = this.state;
    return (
      <div className="App" >
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
      </div>
    )
  }
}

export default App;
