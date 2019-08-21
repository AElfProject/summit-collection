import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import Title from '@components/Title/';
import SPEAKER from '@img/logo.jpg';
import './index.less';

const speakers = [
  {
    id: 1,
    name: 'xxxx',
    speakTitle: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
    contactMethod: ['fab', 'facebook']
  },
  {
    id: 2,
    name: 'xxxx',
    speakTitle: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
    contactMethod: ['fab', 'facebook']
  },
  {
    id: 3,
    name: 'xxxx',
    speakTitle: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
    contactMethod: ['fab', 'facebook']
  },
  {
    id: 4,
    name: 'xxxx',
    speakTitle: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
    contactMethod: ['fab', 'facebook']
  },
  {
    id: 5,
    name: 'xxxx',
    speakTitle: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
    contactMethod: ['fab', 'facebook']
  },
  {
    id: 6,
    name: 'xxxx',
    speakTitle: 'xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx ',
    contactMethod: ['fab', 'facebook']
  }
];

export default function Speakers() {
  return (
    <div className="speakers-container full-screen-container" id="speakers">
      <Title title="演讲者" />
      <CardDeck className="speakers-cards block-center">
        {speakers.map(speaker => (
          <Card className="speaker-item" key={speaker.id}>
            <Card.Img
              className="summit-speaker-img"
              variant="top"
              src={SPEAKER}
            />
            <Card.Body>
              <Card.Title className="card-title">{speaker.name}</Card.Title>
              <Card.Text className="card-text">{speaker.speakTitle}</Card.Text>
              {/* <a className="contact-method-link" href="">
                <FontAwesomeIcon
                  icon={speaker.contactMethod}
                  size="lg"
                  color="lightblue"
                />
              </a> */}
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
