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

import msf from '../../images/msf.jpg'

const styles = {
  media: {
    height: 140,
  },
  card: {
    height: 350,
  }
};


/**
 * Case component.
 *
 * @extends React.Component
 */
class Case extends Component {
  /** @inheritdoc */
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardActionArea className={classes.card}>
          <CardMedia
            className={classes.media}
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">
              {this.props.children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(Case);
