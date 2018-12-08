import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    background: "#0336ff",
    color: "#fff",
    marginTop: 20,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center",
  },
  typography: {
    color: "inherit",
  }
});

/**
 * Attention component.
 *
 * @extends React.Component
 */
class Attention extends Component {
  /** @inheritdoc */
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.typography}>
          Interesseret?
        </Typography>
        <Typography variant="h4" className={classes.typography}>
          Lad os tage en uforpligtende snak
        </Typography>
        <Typography paragraph className={classes.typography}>
          Ring eller skriv en mail<br />
          <em>+45 6177 3010</em><br />
          <em>m@mgit.dk</em>
        </Typography>
      </Paper>
    );
  }
}

Attention.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Attention);
