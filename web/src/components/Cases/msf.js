import React, { Component } from 'react';

import Case from '../Case';

import msf from '../../images/msf.jpg'

/**
 * Msf Case component.
 *
 * @extends React.Component
 */
class CaseMsf extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={msf} title="Læger Uden Grænser">
        <em>2016</em><br />
        Gennem min ansættelse i Reload arbejdede jeg sammen med Læger Uden Grænser i en længere periode. Jeg overtog projektet fra den tidligere projektleder, og fik startet en afrapporteringsmekanisme op, som gav kunden det manglende overblik.
      </Case>
    );
  }
}

export default CaseMsf;
