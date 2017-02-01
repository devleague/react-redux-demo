import React, { Component, PropTypes } from 'react';
import NavLink from './NavLink';
import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <header >
          <ul role="nav">
            <li><NavLink to='/' onlyActiveOnIndex={ true }>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
          </ul>
        </header>
      </div>
    )
  }
}

export default Header;
