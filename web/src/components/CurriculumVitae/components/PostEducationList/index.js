import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

/**
 * Post education component.
 *
 * @extends React.Component
 */
class PostEducationList extends Component {
  /** @inheritdoc */
  render() {
    return (
      <div>
        <Typography variant="h6">
          Efteruddannelser, kurser og konferencer
        </Typography>
        <Typography paragraph>
          <ol>
            <li>
              Drupal Camp Aarhus 2017<br />
              <em>d. 24. marts 2017 - d. 25. marts 2017</em>
            </li>
            <li>
              <a href="https://universe.ida.dk/arrangement/vil-du-arbejde-med-design-af-vaerditilbud-og-nye-forretningsmodeller-321695/" target="_blank" rel="noopener noreferrer">Vil du arbejde med design af værditilbud og nye forretningsmodeller?</a><br />
              Ved Professor Christian Nielsen, Business Model Design Center<br />
              Assistant Professor Morten Lund, Business Model Design Center<br />
              Filminstruktør og Illustrator Thor F. Jensen, Business Model Design Center<br />
              Johan de Renouard, Value Proposition Design Center<br />
              <em>d. 13. marts 2017 - d. 14. marts 2017</em>
            </li>
            <li>
              <a href="https://skillsmatter.com/conferences/8628-agile-testing-and-bdd-exchange-2017" target="_blank" rel="noopener noreferrer">Agile Testing og BDD Exchange 2016 i London</a><br />
              <em>d. 10. november 2016 - d. 11. november 2016</em>
            </li>
            <li>
              Apache Camel og RESTful API ved Claus Ibsen, Jakob Bendsen og Christian Damsgaard<br />
              d. 17. november 2015
            </li>
            <li>
              Funktionsprogrammering – Del 2: Idris og den næste generation ved David Raymond Christensen, PhD studerende fra ITU<br />
              <em>d. 29. september 2014</em>
            </li>
            <li>
              Funktionsprogrammering – Del 1: Sådan gør vi i dag ved Peter Sestoft, professor fra ITU<br />
              <em>d. 24. september 2014</em>
            </li>
            <li>
              Introduktion til MongoDB ved Tugdual Grall fra MongoDB<br />
              <em>d. 16. september 2014</em>
            </li>
          </ol>
        </Typography>
      </div>
    );
  }
}

export default PostEducationList;
