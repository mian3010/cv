import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

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
        <ol>
          <li>
            <Typography paragraph>
              Freelance projektleder/udvikler<br />
              <em>Juni 2018 - ? (6 måneder)</em>
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Driftschef hos Rommel ApS<br />
              <em>Januar 2018 - maj 2018 (5 måneder)</em>
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Teknisk projektleder hos Reload A/S<br />
              <em>Juni 2016 - december 2017 (1 år og 7 måneder)</em><br />
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Partner og stifter hos eReg IVS<br />
              <em>maj 2013 - september 2018 (5 år og 5 måneder)</em>
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Selvstændig udvikler hos Megha-IT IVS<br />
              <em>Januar 2013 – juni 2016 (3 år og 5 måneder)</em>
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Deltidsudvikler hos Statisten ApS<br />
              <em>December 2011 til januar 2013 (1 år og 2 måneder)</em>
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Salgsassistent for 7-eleven, tidligere Kort og Godt A/S<br />
              <em>November 2010 til december 2011 (1 år og 3 måneder)</em>
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Salgsassistent for Q8 i Farum<br />
              <em>November 2008 til december 2010 (2 år og 2 måneder).</em>
            </Typography>
          </li>
        </ol>
      </div>
    );
  }
}

export default WorkList;
