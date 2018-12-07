import React, { Component } from 'react';

import Case from '../Case';

import ereolen from '../../images/ereolen.jpg'

/**
 * eReolen Case component.
 *
 * @extends React.Component
 */
class CaseEreolen extends Component {
  /** @inheritdoc */
  render() {
    const { classes } = this.props;
    return (
      <Case image={ereolen} title="eReolen">
        <em>Drupal 7</em><br />
        Som freelancer i min egen virksomhed blev jeg hyret ind af Reload, til at være backendudvikler på det nye eReolen.dk. Vi leverede projektet til tiden, til budgettet og til en glad kunde.
      </Case>
    );
  }
}

export default CaseEreolen;
