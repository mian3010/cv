import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
          <em><a href="tel:+4561773010" style={{color: "inherit"}}>+45 6177 3010</a></em><br />
          <em><a href="mailto:m@mgit.dk" style={{color: "inherit"}}>m@mgit.dk</a></em>
        </Typography>
      </Paper>
    );
  }
}

Attention.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Attention);
