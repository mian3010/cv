import React, { Component } from 'react';
import Navigation from '../Navigation';

/**
 * Header component.
 *
 * @extends React.Component
 */
class Header extends Component {
  /** @inheritdoc */
  render() {
    return (
      <header>
        <Navigation />
      </header>
    );
  }
}

export default Header;
