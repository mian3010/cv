import React, { Component } from 'react';

import Case from '../Case';

import dac from '../../images/dac.jpg'

/**
 * Dansk Arkitektur Center Case component.
 *
 * @extends React.Component
 */
class CaseDac extends Component {
  /** @inheritdoc */
  render() {
    const { classes } = this.props;
    return (
      <Case image={dac} title="Dansk Arkitektur Center">
        Gennem min ansættelse i Reload blev jeg projektleder for projektet der skulle bygge Dansk Arkitektur Centers nye app. Denne app skulle guide folk gennem arkitekturen i København.
      </Case>
    );
  }
}

export default CaseDac;
