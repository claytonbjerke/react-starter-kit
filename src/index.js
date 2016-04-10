import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './app/App';
import Home from './home/Home';
import About from './about/About';
import References from './references/References';
import ToDo from './todo/ToDo';

require('../node_modules/todomvc-app-css/index.css');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/todo" component={ToDo}/>
      <Route path="/about" component={About}/>
      <Route path="/references" component={References}/>
    </Route>
  </Router>
), document.getElementById('app'));
