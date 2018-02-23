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
import Work from '../../Work';
import Interview from '../../Interview';
import Menu from './Menu.js';

const Main = (props) => (
  
  <Router>
    
    <Switch>
  
      <Redirect exact from="/" to="/work/"/>
      <Route exact path="/work/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/work/" render={routeProps => <Work {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Main
