import React, { Component } from 'react';

import Case from '../Case';

import fc from '../../images/fc.jpg'

/**
 * Fort Consult Case component.
 *
 * @extends React.Component
 */
class CaseFc extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={fc} title="Fort Consult">
        <em>Drupal 8</em><br />
        Gennem min ansættelse i Rommel blev jeg sat til at løse et par mindre problemer for Fort Consult
      </Case>
    );
  }
}

export default CaseFc;
