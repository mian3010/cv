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
        <Typography paragraph>
          <ol>
            <li>
              Bachelor i Softwareudvikling fra IT Universitetet i København<br />
              <em>2011 til 2014 (3 år)</em><br />
              Herunder følgende kurser:
              <ol>
                <li>Project Work and Communication (BPAK-B)</li>
                <li>Introductory Programming (BGPP)</li>
                <li>Systematic Design of User Interfaces (BSDB)</li>
                <li>Algorithms and Data Structures (BADS)</li>
                <li>Object Oriented Software Construction (BOSK)</li>
                <li>Project cluster: First-year Project (KF04)</li>
                <li>Analysis, Design and Software Architecture (BDSA)</li>
                <li>Introduction to Database Design (formerly Data Storage and Formats) (BIDD)</li>
                <li>Mobile and Distributed Systems (formerly Distributed Systems and Protocols) (BMDS)</li>
                <li>Second Year Project: Software Development in Large Teams with International Collaboration (BNDN)</li>
                <li>System Development and Project Organisation (BSUP)</li>
                <li>Mobile App Development (MMAD)</li>
                <li>Second Year Project – Functional Programming (BFNP)</li>
                <li>Operating Systems and C (BOSC)</li>
                <li>Business Processes and Organisation (BFOP)</li>
                <li>Programs as Data (BPRD)</li>
                <li>Reflections on IT (BRIT)</li>
                <li>Organisation and business development (MOVU)</li>
                <li>Project Cluster: Bachelor’s Project (KF03)</li>
              </ol>
            </li>
            <li>
              Højere Teknisk Eksamens fra HTX i Hillerød<br />
              <em>2008 til 2011 (3 år)</em>
            </li>
          </ol>
        </Typography>
      </div>
    );
  }
}

export default EducationList;
