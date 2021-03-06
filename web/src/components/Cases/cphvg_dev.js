import React, { Component } from 'react';

import Case from '../Case';

import cphvg from '../../images/cphvg.jpg'

/**
 * Copenhagen Visitor Guide Developer Case component.
 *
 * @extends React.Component
 */
class CaseCphVgDev extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={cphvg} title="Københavns Kommune - Visitor Guide">
        <em>2018</em><br />
        <em>Drupal 7 & React</em><br />
        Som freelancer blev jeg hyret ind af Reload, til at løse en masse problemer på VisitorGuide-systemet.
      </Case>
    );
  }
}

export default CaseCphVgDev;
