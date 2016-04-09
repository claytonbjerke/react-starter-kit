import React from 'react';
import NavLink from './NavLink';
import { IndexLink, Link } from 'react-router';

export default React.createClass({
  render() {
    return (
        <div>
          <h1>react-starter-kit</h1>
          <ul role="nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/references">References</NavLink></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
})
