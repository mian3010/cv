import React, { Component } from 'react';

import Case from '../Case';

import dr from '../../images/dr.jpg'

/**
 * DR Case component.
 *
 * @extends React.Component
 */
class CaseDr extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={dr} title="Danmarks Radio">
        <em>2015/2016</em><br />
        Som freelancer i min egen virksomhed blev jeg sendt ud til DR af Reload. Her blev jeg hurtigt en af de ansvarlige for arkitekturen i systemet, og endte med at være ansvarlig for at implementere en proces, som gjorde det muligt for forskellige afdelinger at arbejde i samme kodebase.
      </Case>
    );
  }
}

export default CaseDr;
