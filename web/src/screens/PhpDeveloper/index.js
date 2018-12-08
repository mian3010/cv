import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import profileImage from '../../images/profile_image.jpg';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import CurriculumVitae from '../../components/CurriculumVitae';

import CaseBus from '../../components/Cases/bus.js';
import CaseEreg from '../../components/Cases/ereg.js';
import CaseDrDev from '../../components/Cases/dr_dev.js';
import CaseDjDev from '../../components/Cases/dj_dev.js';
import CaseEreolen from '../../components/Cases/ereolen.js';
import CaseStatisten from '../../components/Cases/statisten.js';
import CaseFc from '../../components/Cases/fc.js';
import CaseCphVgDev from '../../components/Cases/cphvg_dev.js';

/**
 * PHP developer screen
 *
 * @extends React.Component
 */
class PhpDeveloper extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: `
          #root { background: #f7f8fb; }
    `   }} />
        <div style={{height: 10 + "px"}} />
        <Grid container spacing={24}>
          <Grid item md={5} sm={12}>
            <img src={profileImage} alt="" />
          </Grid>
          <Grid item md={7} sm={12}>
            <Typography component="h1" variant="h2">
              Michael Søby Andersen
            </Typography>
            <div style={{height: 40 + "px"}} />
            <Typography variant="subtitle1">
              Freelance PHP-udvikler<br />
              Tlf. nr.: <a href="tel:+4561773010">+45 6177 3010</a><br />
              Mail: <a href="mailto:m@mgit.dk">m@mgit.dk</a>
            </Typography>
          </Grid>
        </Grid>
        <div style={{height: 20 + "px"}} />
        <Divider />
        <div style={{height: 20 + "px"}} />
        <Typography paragraph>
          Jeg er en freelance PHP-udvikler med mange års erfaring i mange forskellige frameworks og systemer, herunder Symfony, Laravel/Lumen, Drupal 7/8, Wordpress. Flere af disse med React som frontend..
        </Typography>
        <Typography paragraph>
          Jeg begyndte at lære PHP som 12-årig, og havde mit første job som PHP-udvikler som 19-årig, og har derfor over 7 års erfaring.
        </Typography>
        <Typography paragraph>
          Jeg er bedst til implementering af tunge backend-opgaver. Jeg fungerer bedst i en stilling som backend-udvikler.
        </Typography>
        <div style={{height: 10 + "px"}} />
        <Typography variant="h4">
            Erfaring
        </Typography>
        <div style={{height: 10 + "px"}} />

        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <CaseBus />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseEreg />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseDrDev />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseDjDev />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseEreolen />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseStatisten />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseFc />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseCphVgDev />
          </Grid>
        </Grid>
        <div style={{height: 20 + "px"}} />
        <Divider />
        <div style={{height: 20 + "px"}} />
        <CurriculumVitae />
      </div>
    );
  }
}

export default withRouter(PhpDeveloper);
