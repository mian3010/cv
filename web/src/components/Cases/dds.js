import React, { Component } from 'react';

import Case from '../Case';

import dds from '../../images/dds.jpg'

/**
 * DDS Case component.
 *
 * @extends React.Component
 */
class CaseDds extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={dds} title="Det Danske Spejderkorps">
        <em>2017</em><br />
        Gennem min ansættelse i Reload blev jeg projektleder for projektet der skulle give Det Danske Spejderkorps en ny hjemmeside. I samarbejde med Aller CP fik de et helt nyt site, som i langt højere grad understøttede deres formål.
      </Case>
    );
  }
}

export default CaseDds;
