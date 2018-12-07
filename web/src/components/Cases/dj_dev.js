import React, { Component } from 'react';

import Case from '../Case';

import dj from '../../images/dj.jpg'

/**
 * DJ Developer Case component.
 *
 * @extends React.Component
 */
class CaseDjDev extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={dj} title="Dansk Journalistforbund">
        <em>Drupal 8</em><br />
        Gennem min ansættelse i Reload var jeg en kort overgang udvikler på projektet for Dansk Journalistforbund. Jeg var med til at bygge størstedelen af deres nye site, og er i dag stadig den med flest commits på projektet.
      </Case>
    );
  }
}

export default CaseDjDev;
