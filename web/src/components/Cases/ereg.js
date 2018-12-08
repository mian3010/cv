import React, { Component } from 'react';

import Case from '../Case';

import ereg from '../../images/ereg.jpg'

/**
 * eReg Case component.
 *
 * @extends React.Component
 */
class CaseEreg extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={ereg} title="eReg - Tidsstyring">
        <em>2013</em><br />
        <em>PHP & React</em><br />
        Jeg har stiftet eReg sammen med min forretningspartner Mikkel Rommelhoff. Her har jeg bygget systemet i ren PHP, med en mobilvisning bygget i React.
      </Case>
    );
  }
}

export default CaseEreg;
