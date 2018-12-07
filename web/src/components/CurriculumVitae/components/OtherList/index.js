import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

/**
 * Other list component.
 *
 * @extends React.Component
 */
class OtherList extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <Typography variant="h6">
          Anden relevant aktivitet
        </Typography>
        <Typography paragraph>
          <ol>
            <li>
              Foredragsholder til Drupal Camp Aarhus, 24./25. marts 2017<br />
              <em>Oplæg: <a href="https://reload.dk/blog/lab/anatomy-crisis" target="_blank" rel="noopener noreferrer">reload.dk/blog/lab/anatomy-crisis</a></em>
            </li>
            <li>
              Udvalgt til Netcompany Talent Network 2014 på baggrund af min indsats på ITU.<br />
              <em>Udvalgt af Peter Sestoft, professor fra ITU.</em>
            </li>
            <li>
              Spejder gennem 12 år, herunder flere år som spejderleder.
            </li>
          </ol>
        </Typography>
      </div>
    );
  }
}

export default OtherList;
