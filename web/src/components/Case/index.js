import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  media: {
    height: 140,
  },
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
      <Card style={{minHeight: 100 + "%"}}>
        <CardActionArea>
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
