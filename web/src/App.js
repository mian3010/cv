import React, { Component } from 'react';
import Header from './components/Header';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
