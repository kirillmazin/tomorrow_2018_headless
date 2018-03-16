import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Preview from '../../Preview';
import Help from '../../Help';
import NotFound from '../../NotFound';
import Page from '../../Page';
import Contact from '../../Contact';
import About from '../../About';
import Work from '../../Work';
import Home from '../../Home';

import Interview from '../../Interview';
import Menu from './Menu.js';
import { ParallaxProvider, Parallax } from 'react-skrollr'
const Main = (props) => (
  <ParallaxProvider>
  <Router>

    <Switch>

      <Redirect exact from="/" to="/home/"/>
      <Route exact path="/project/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/work/:uid" render={routeProps => <Work {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/work/" render={routeProps => <Work {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/contact/" render={routeProps => <Contact {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/about/" render={routeProps => <About {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/home/" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
  
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />

      <Route component={NotFound} />
    </Switch>
  </Router>

    </ParallaxProvider>
)

export default Main
