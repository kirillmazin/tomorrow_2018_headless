import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


import NotFound from './NotFound';


import Main from './components/_globals/Main.js';


const App = (props) => (

<div>

  <Main prismicCtx={props.prismicCtx}/>


</div>

);

export default App;
