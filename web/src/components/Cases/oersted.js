import React, { Component } from 'react';

import Case from '../Case';

import oersted from '../../images/oersted.jpg'

/**
 * Oersted Case component.
 *
 * @extends React.Component
 */
class CaseOersted extends Component {
  /** @inheritdoc */
  render() {
    const { classes } = this.props;
    return (
      <Case image={oersted} title="Ørsted - Obviux Nemo">
        Gennem min ansættelse i Reload blev jeg sendt ud til Obviux, som bygger faktureringssystemet til Ørsted, tidligere Dong Energy. Her agerede jeg Scrum Master, og hjalp dem i mål til deadline.
      </Case>
    );
  }
}

export default CaseOersted;
