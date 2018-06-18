import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {Helmet} from "react-helmet";

import NotFound from './NotFound';


import Main from './components/_globals/Main.js';


const App = (props) => (

<div>

    <Helmet>

        <meta name="description" content="We help organizations achieve greater impact through design." />
    </Helmet>



  <Main prismicCtx={props.prismicCtx}/>


</div>

);

export default App;
