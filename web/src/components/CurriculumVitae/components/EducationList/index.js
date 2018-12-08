import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

/**
 * Education list component.
 *
 * @extends React.Component
 */
class EducationList extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <Typography variant="h6">
          Uddannelse
        </Typography>
        <ol>
          <li>
            <Typography paragraph>
              Bachelor i Softwareudvikling fra IT Universitetet i København<br />
              <em>2011 til 2014 (3 år)</em><br />
              Herunder følgende kurser:
            </Typography>
            <ol>
              <li><Typography paragraph>Project Work and Communication (BPAK-B)</Typography></li>
              <li><Typography paragraph>Introductory Programming (BGPP)</Typography></li>
              <li><Typography paragraph>Systematic Design of User Interfaces (BSDB)</Typography></li>
              <li><Typography paragraph>Algorithms and Data Structures (BADS)</Typography></li>
              <li><Typography paragraph>Object Oriented Software Construction (BOSK)</Typography></li>
              <li><Typography paragraph>Project cluster: First-year Project (KF04)</Typography></li>
              <li><Typography paragraph>Analysis, Design and Software Architecture (BDSA)</Typography></li>
              <li><Typography paragraph>Introduction to Database Design (formerly Data Storage and Formats) (BIDD)</Typography></li>
              <li><Typography paragraph>Mobile and Distributed Systems (formerly Distributed Systems and Protocols) (BMDS)</Typography></li>
              <li><Typography paragraph>Second Year Project: Software Development in Large Teams with International Collaboration (BNDN)</Typography></li>
              <li><Typography paragraph>System Development and Project Organisation (BSUP)</Typography></li>
              <li><Typography paragraph>Mobile App Development (MMAD)</Typography></li>
              <li><Typography paragraph>Second Year Project – Functional Programming (BFNP)</Typography></li>
              <li><Typography paragraph>Operating Systems and C (BOSC)</Typography></li>
              <li><Typography paragraph>Business Processes and Organisation (BFOP)</Typography></li>
              <li><Typography paragraph>Programs as Data (BPRD)</Typography></li>
              <li><Typography paragraph>Reflections on IT (BRIT)</Typography></li>
              <li><Typography paragraph>Organisation and business development (MOVU)</Typography></li>
              <li><Typography paragraph>Project Cluster: Bachelor’s Project (KF03)</Typography></li>
            </ol>
          </li>
          <li>
            <Typography paragraph>
              Højere Teknisk Eksamens fra HTX i Hillerød<br />
              <em>2008 til 2011 (3 år)</em>
            </Typography>
          </li>
        </ol>
      </div>
    );
  }
}

export default EducationList;
