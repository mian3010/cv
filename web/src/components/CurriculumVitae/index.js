import React, { Component } from 'react';

import WorkList from './components/WorkList';
import EducationList from './components/EducationList';
import PostEducationList from './components/PostEducationList';
import OtherList from './components/OtherList';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/**
 * CV component.
 *
 * @extends React.Component
 */
class CurriculumVitae extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4">Læs mit CV her</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
            <WorkList />
            <EducationList />
            <PostEducationList />
            <OtherList />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default CurriculumVitae;
