import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';
import References from './References';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/references" component={References}/>
    </Route>
  </Router>
), document.getElementById('app'));
