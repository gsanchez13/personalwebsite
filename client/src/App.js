import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Landing from './Components/Landing';
import About from './Components/About';
// import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Toggle from './Components/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styling-files/theme.js';
import { GlobalStyles } from './styling-files/global.js';

const App = () => {
  const [appState, setAppState] = useState({
    theme: 'light',
    logo: require('./giselle.png'),
    navName: 'light-nav',
    footerName: 'light-footer',
    aboutBlurb: 'about-blurb-light'
  });
  const changeTheme = () => {
    if (appState.theme === 'light') {
      setAppState({
        theme: 'dark',
        logo: require('./giselledark.png'),
        navName: 'dark-nav',
        footerName: 'dark-footer',
        iconColor: 'gold',
        aboutBlurb: 'about-blurb-dark'
      })
    }
    else {
      setAppState({
        theme: 'light',
        logo: require('./giselle.png'),
        navName: 'light-nav',
        footerName: 'light-footer',
        iconColor: 'grey',
        aboutBlurb: 'about-blurb-light'
      })
    }
  };
  const { theme, logo, navName, footerName, iconColor, aboutBlurb} = appState;
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <div className="App" >
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={changeTheme} iconColor={iconColor} />
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-container">
          <NavBar class={navName} />
        </div>
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" render={() => (<About aboutClass={aboutBlurb}/>)}/>
            {/* <Route exact path="/projects" component={Projects} /> */}
            <Route exact path="/skills" component={Skills} />
          </Switch>
        </div>
        <div className={'footer-container'}>
          <Footer class={footerName} />
        </div>
      </div>
    </ThemeProvider>
  )
};

export default App;
