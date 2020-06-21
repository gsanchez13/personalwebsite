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
    // margin: auto;
    font-family: 'Baloo 2', cursive;
    min-height: 100%;
    margin-bottom: -50px
  }
  body, #root, html{
    height: 100%;
    margin: 0
  }
  .toggle-component {
    margin-right: 10px;
    margin-top: 20px;
  }
  .logo {
    align-self: flex-start;
    height: 220px;
  }
  @media screen and (max-width: 600px){
    .logo {
      height: 190px;
    }
  }
  .nav-container {
    width: 100%;
  }
  .light-nav {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    width: 60%;
    margin: auto;
    border-top: solid 2px rgb(182, 176, 176);
    border-bottom: solid 2px rgb(182, 176, 176);
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 600px) {
    .light-nav {
      font-size: 10px;
    }
    .dark-nav {
      font-size: 10px;
    }
  }
  .light-nav > a {
    color: gray;
    text-decoration: none;
  }
  .light-nav > a:hover{
    color: skyblue;
  }
  .dark-nav {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    width: 60%;
    margin: auto;
    border-top: solid 2px rgb(182, 176, 176);
    border-bottom: solid 2px rgb(182, 176, 176);
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .dark-nav > a {
    color: white;
    text-decoration: none;
  }
  .dark-nav > a:hover{
    color: yellow;
  }
  .content-container {
    padding-top: 5%;
    margin: auto;
    height: 100%;
    width: 50%;
    font-size: 2.5vh;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    .content-container {
      font-size: 15px;
      overflow: auto;
    }
  }
  .footer-container {
    align-self: baseline;
    margin: 30px auto 30px auto;
    width: 100%;
    font-size: 3vh;
    bottom: 0;
    margin-bottom: -50px
  }
  @media screen and (max-width: 600px) {
    .footer-container {
      font-size: 2vh;
    }
  }
  .light-footer {
    width: 50%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .light-footer > a {
    color: black;
  }
  .light-footer > a:hover {
    color: teal;
  }
  .dark-footer {
    width: 50%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .dark-footer > a {
    color: white;
  }
  .dark-footer > a:hover {
    color: teal;
  }
  .skills-div {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  // .skills-icon-div{
  //   display: flex;
  //   flex-flow: column;
  // }
  .iconClass {
    font-size: 9vh;
  }
  @media screen and (max-width: 600px){
    .iconClass {
      font-size: 6vh;
    }
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
      -webkit-transform: rotate(360deg); transform:rotate(360deg)
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
  .projects-div {
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
.project-card {
  display: flex;
  flex-flow: column
}
.project-image {
  width: 60%
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  button {
    margin-left: auto
  }
  a:link, a:visited {
      text-decoration: none;
      color: black;
  }
}
`
