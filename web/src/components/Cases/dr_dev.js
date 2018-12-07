import React, { Component } from 'react';

import Case from '../Case';

import dr from '../../images/dr.jpg'

/**
 * DR Developer Case component.
 *
 * @extends React.Component
 */
class CaseDrDev extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={dr} title="Danmarks Radio">
        <em>Drupal 7</em><br />
        Som freelancer i min egen virksomhed blev jeg sendt ud til DR af Reload. Jeg blev en del af arkitektgruppen efter kun 2 måneder på projektet, og blev således en af de ansvarlige for struktureringen af danmarks største Drupal-løsning.
      </Case>
    );
  }
}

export default CaseDrDev;
