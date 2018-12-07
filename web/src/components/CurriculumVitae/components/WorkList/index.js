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
 * Work list component.
 *
 * @extends React.Component
 */
class WorkList extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <Typography variant="h6">
          Arbejde
        </Typography>
        <Typography paragraph>
          <ol>
            <li>
              Freelance projektleder/udvikler<br />
              <em>Juni 2018 - ? (6 måneder)</em>
            </li>
            <li>
              Driftschef hos Rommel ApS<br />
              <em>Januar 2018 - maj 2018 (5 måneder)</em>
            </li>
            <li>
              Teknisk projektleder hos Reload A/S<br />
              <em>Juni 2016 - december 2017 (1 år og 7 måneder)</em><br />
            </li>
            <li>
              Partner og stifter hos eReg IVS<br />
              <em>maj 2013 - ? (5 år og 6 måneder)</em>
            </li>
            <li>
              Selvstændig udvikler hos Megha-IT IVS<br />
              <em>Januar 2013 – juni 2016 (3 år og 5 måneder)</em>
            </li>
            <li>
              Deltidsudvikler hos Statisten ApS<br />
              <em>December 2011 til januar 2013 (1 år og 2 måneder)</em>
            </li>
            <li>
              Salgsassistent for 7-eleven, tidligere Kort og Godt A/S<br />
              <em>November 2010 til december 2011 (1 år og 3 måneder)</em>
            </li>
            <li>
              Salgsassistent for Q8 i Farum<br />
              <em>November 2008 til december 2010 (2 år og 2 måneder).</em>
            </li>
          </ol>
        </Typography>
      </div>
    );
  }
}

export default WorkList;
