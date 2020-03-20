import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, 
*::after,
*::before{
    box-sizing: border-box;
}
.App {
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    flex-flow: column;
    height: 100vh;
  }
  .logo {
    align-self: flex-start;
    height: 250px;
  }
  .nav-container {
    width: 100%;
  }
  .nav-bar {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    width: 60%;
    margin: auto;
    border-top: solid 2px rgb(182, 176, 176);
    border-bottom: solid 2px rgb(182, 176, 176);
  }
  .nav-bar > a {
    color: black;
    text-decoration: none;
  }
  .nav-bar > a:hover{
    color: skyblue;
  }
  .content-container {
    padding: 30px;;
    margin: auto;
  }
  .footer-container {
    align-self: center;
    margin: 30px;
    height: 20px;
    width: 100%;
    font-size: 20px;
  }
  .footer {
    width: 30%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .footer > a {
    color: skyblue;
  }
  .footer > a:hover {
    color: teal;
  }
  .content-container {
    width: 50%
  }
  .skills-div {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .skills-icon-div{
    display: flex;
    flex-flow: column;
  }
  .iconClass {
    font-size: 9vh;
  }
  .about-blurb {
    text-align: center;
  }
  .about-div {
    width: 100%;
    text-align: left;
    display: flex;
    flex-flow: column;
  }
  .route {
    width: 30%;
    align-self: center;
  }
  .gif-container {
    position: relative;
    animation:go 4s infinite normal;
  }
  .soccer-ball {
    animation:spin .5s linear infinite;
  }
  @keyframes spin { 
    100% { 
      -webkit-transform: rotate(360deg); transform:rotate(360deg);
    }
  }
  @keyframes go {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
  .switch-box {
    width: 10%
  }
  
  .projects-div {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
