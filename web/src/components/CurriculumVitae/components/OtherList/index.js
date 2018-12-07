import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

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
              <em>Oplæg: <a href="https://reload.dk/blog/lab/anatomy-crisis" target="_blank">reload.dk/blog/lab/anatomy-crisis</a></em>
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
