import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Preview from './Preview';
import Help from './Help';
import NotFound from './NotFound';
import Page from './Page';
import Interview from './Interview';
import Main from './components/_globals/Main.js';
import Menu from './components/_globals/Menu.js';
import Footer from './components/_globals/Footer.js';
const App = (props) => (

<div>

  <Main prismicCtx={props.prismicCtx}/>


</div>

);

export default App;
