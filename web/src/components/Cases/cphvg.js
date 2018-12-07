import React, { Component } from 'react';

import Case from '../Case';

import cphvg from '../../images/cphvg.jpg'

/**
 * CPH Visitor Guide Case component.
 *
 * @extends React.Component
 */
class CaseCphVg extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={cphvg} title="Københavns Kommune - VisitorGuide">
        <a href="http://cphvisitorguide.dk" target="_blank" rel="noopener noreferrer">cphvisitorguide.dk</a><br />
        Gennem min ansættelse i Reload blev jeg projektleder for et projekt for Københavns Kommune, som omhandlede et system der skulle hjælpe turister i Køvenhavn, navnligt Copenhagen Visitor Guide. Projektet kom i mål, på trods af valg af en helt ny teknisk platform.
      </Case>
    );
  }
}

export default CaseCphVg;
