import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  typo: {
    padding: 16,
    margin: 0,
  },
  toolbar: {
    margin: 0,
    padding: 0,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

/**
 * Navigation component.
 *
 * @extends React.Component
 */
class Navigation extends Component {
  /** @inheritdoc */
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid xs={12} sm={12} md={4}>
            <Link to='/projektleder' className={classes.link}>
              <Typography variant="h6" color="inherit" className={classes.typo} style={{background: "#000000", color: "#fff"}}>
                Projektleder
              </Typography>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Link to='/drupal-udvikler' className={classes.link}>
              <Typography variant="h6" color="inherit" className={classes.typo} style={{background: "#25AAE1", color: "#fff"}}>
                Drupal-udvikler
              </Typography>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Link to='/php-udvikler' className={classes.link}>
              <Typography variant="h6" color="inherit" className={classes.typo} style={{background: "#617cbe", color: "#fff"}}>
                PHP-udvikler
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
