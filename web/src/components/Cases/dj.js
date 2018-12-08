import React, { Component } from 'react';

import Case from '../Case';

import dj from '../../images/dj.jpg'

/**
 * DJ Case component.
 *
 * @extends React.Component
 */
class CaseDj extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={dj} title="Dansk Journalistforbund">
        <em>2017</em><br />
        Gennem min ansættelse i Reload startede jeg som udvikler på projektet for Dansk Journalistforbund. Efter lancering tog jeg over som projektleder, og hjalp dem i mål med de fejl og mangler der har været.
      </Case>
    );
  }
}

export default CaseDj;
