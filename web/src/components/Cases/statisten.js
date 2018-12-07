import React, { Component } from 'react';

import Case from '../Case';

import statisten from '../../images/statisten.jpg'

/**
 * Statisten Case component.
 *
 * @extends React.Component
 */
class CaseStatisten extends Component {
  /** @inheritdoc */
  render() {
    return (
      <Case image={statisten} title="Statisten">
        <em>Drupal 7</em><br />
        Mit første IT-job var som deltidsudvikler hos Statisten. Her fik jeg mulighed for at lære hvordan Drupal 7 fungerede, og endte med at være Statistens ansvarlige for deres nye site, mens det blev bygget.
      </Case>
    );
  }
}

export default CaseStatisten;
