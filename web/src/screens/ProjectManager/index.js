import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import profileImage from '../../images/profile_pm.jpg';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import CurriculumVitae from '../../components/CurriculumVitae';

import CaseMsf from '../../components/Cases/msf.js';
import CaseDds from '../../components/Cases/dds.js';
import CaseDj from '../../components/Cases/dj.js';
import CaseCphVg from '../../components/Cases/cphvg.js';
import CaseOersted from '../../components/Cases/oersted.js';
import CaseDr from '../../components/Cases/dr.js';
import CaseDac from '../../components/Cases/dac.js';

/**
 * Project Manager screen
 *
 * @extends React.Component
 */
class ProjectManager extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: `
          #root { background: #f2f2f2; }
    `   }} />
        <div style={{height: 10 + "px"}} />
        <Grid container spacing={24}>
          <Grid item md={5} sm={12}>
            <img src={profileImage} alt="" />
          </Grid>
          <Grid item md={7} sm={12}>
            <Typography component="h1" variant="h2">
              Freelance projektleder
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
          Jeg er en IT projektleder, som har stor erfaring med agile projekter, herunder SCRUM og til dels KANBAN. Jeg har tidligere været selvstændig udvikler, så har således et stærkt teknisk fundament, som tit hjælper mig i min projektledelse.
        </Typography>
        <Typography paragraph>
          På sigt vil jeg gerne arbejde på et mere strategisk niveau. Jeg synes det er rigtigt interessant at være med til at sætte mål og visioner for virksomheder, og være med til at finde ud af hvordan problemer løses i større teams eller organisationer.
        </Typography>
        <Typography paragraph>
          Jeg fungerer bedst i projekter med mange interessanter, komplekse organisationer, og hvor klar og tydelig afrapportering er vigtig. Jeg fungerer både i mindre og større teams, og gør mit bedste for at kende mit team så godt som muligt, så vi sammen kan løfte de udfordringer vi bliver stillet overfor.
        </Typography>
        <div style={{height: 10 + "px"}} />
        <Typography variant="h4">
            Erfaring
        </Typography>
        <div style={{height: 10 + "px"}} />

        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <CaseDac />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseDr />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseDds />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseDj />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseOersted />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseMsf />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CaseCphVg />
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

export default withRouter(ProjectManager);
