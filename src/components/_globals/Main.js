import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Preview from '../../Preview';

import NotFound from '../../NotFound';
import Page from '../../Casestudy';
import Contact from '../../Contact';
import About from '../../About';
import Person from '../../Person';
import Work from '../../Work';
import Home from '../../Home';



const Main = (props) => (

  <Router>

    <Switch>

      <Redirect exact from="/" to="/home/"/>
      <Route exact path="/project/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/work/:uid" render={routeProps => <Work {...routeProps} prismicCtx={props.prismicCtx} />} />

      <Route exact path="/work/" render={routeProps => <Work {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/contact/" render={routeProps => <Contact {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/about/" render={routeProps => <About {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/about/:people" render={routeProps => <About {...routeProps} prismicCtx={props.prismicCtx} />} />

  <Route exact path="/people/:uid" render={routeProps => <Person {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/home/" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />

      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />

      <Route component={NotFound} />
    </Switch>
  </Router>


)

export default Main
