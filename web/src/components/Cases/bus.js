import React, { Component } from 'react';

import Case from '../Case';

import bus from '../../images/bus.jpg'

/**
 * Børn Unge & Sorg Case component.
 *
 * @extends React.Component
 */
class CaseBus extends Component {
  /** @inheritdoc */
  render() {
    const { classes } = this.props;
    return (
      <Case image={bus} title="Børn Unge & Sorg - SMS-rådgivning">
        <em>Laravel/Lumen & React</em><br />
        Gennem min ansættelse i Rommel fik jeg lov at bygge et SMS-rådgivningssystem i Lumen, med en frontend i React.
      </Case>
    );
  }
}

export default CaseBus;
