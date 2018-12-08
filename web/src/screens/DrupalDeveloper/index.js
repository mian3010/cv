import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import profileImage from '../../images/profile_dev.jpg';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import CurriculumVitae from '../../components/CurriculumVitae';

import CaseDrDev from '../../components/Cases/dr_dev.js';
import CaseDjDev from '../../components/Cases/dj_dev.js';
import CaseEreolen from '../../components/Cases/ereolen.js';
import CaseStatisten from '../../components/Cases/statisten.js';
import CaseFc from '../../components/Cases/fc.js';
import CaseCphVgDev from '../../components/Cases/cphvg_dev.js';

/**
 * Drupal developer screen
 *
 * @extends React.Component
 */
class DrupalDeveloper extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: `
          #root { background: #f4fafd; }
    `   }} />
        <div style={{height: 10 + "px"}} />
        <Grid container spacing={24}>
          <Grid item md={5} sm={12}>
            <img src={profileImage} alt="" />
          </Grid>
          <Grid item md={7} sm={12}>
            <Typography component="h1" variant="h2">
              Freelance Drupal-udvikler
            </Typography>
            <div style={{height: 10 + "px"}} />
            <Typography variant="h4">
              Michael Søby Andersen
            </Typography>
            <div style={{height: 40 + "px"}} />
            <Typography variant="subtitle1">
              Tlf. nr.: <a href="tel:+4561773010">+45 6177 3010</a><br />
              Mail: <a href="mailto:m@mgit.dk">m@mgit.dk</a>
            </Typography>
          </Grid>
        </Grid>
        <div style={{height: 20 + "px"}} />
        <Divider />
        <div style={{height: 20 + "px"}} />
        <Typography paragraph>
          Jeg er en freelance Drupal-udvikler med mange års erfaring med både mindre, mellemstore og helt store Drupal-løsninger i både Drupal 7 og 8.
        </Typography>
        <Typography paragraph>
          Jeg har arbejdet med Drupal i over 5 år. Jeg har også været en del af nok danmarks største Drupal-projekt, navnligt DR.dk på Drupal. Her blev jeg en del af arkitektgruppen efter kun 2 måneder på projektet.
        </Typography>
        <Typography paragraph>
          Jeg er bedst til at løse tunge integrationsopgaver og svære problemstillinger. Jeg fungerer bedst i en stilling som backend-udvikler.
        </Typography>
        <div style={{height: 10 + "px"}} />
        <Typography variant="h4">
            Erfaring
        </Typography>
        <div style={{height: 10 + "px"}} />

        <Grid container spacing={24}>
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

export default withRouter(DrupalDeveloper);
