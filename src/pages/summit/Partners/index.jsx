import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import Title from '@components/Title/';
import PARTNER_LOGO from '@img/logo.jpg';
import './index.less';

const partners = [
  {
    id: 1,
    type: null,
    members: [
      {
        id: 1,
        logo: PARTNER_LOGO
      },
      {
        id: 2,
        logo: PARTNER_LOGO
      },
      {
        id: 3,
        logo: PARTNER_LOGO
      },
      {
        id: 4,
        logo: PARTNER_LOGO
      },
      {
        id: 5,
        logo: PARTNER_LOGO
      },
      {
        id: 6,
        logo: PARTNER_LOGO
      },
      {
        id: 7,
        logo: PARTNER_LOGO
      },
      {
        id: 8,
        logo: PARTNER_LOGO
      },
      {
        id: 9,
        logo: PARTNER_LOGO
      }
    ]
  },
  {
    id: 2,
    type: 'XX',
    members: [
      {
        id: 1,
        logo: PARTNER_LOGO
      },
      {
        id: 2,
        logo: PARTNER_LOGO
      },
      {
        id: 3,
        logo: PARTNER_LOGO
      },
      {
        id: 4,
        logo: PARTNER_LOGO
      },
      {
        id: 5,
        logo: PARTNER_LOGO
      },
      {
        id: 6,
        logo: PARTNER_LOGO
      },
      {
        id: 7,
        logo: PARTNER_LOGO
      },
      {
        id: 8,
        logo: PARTNER_LOGO
      },
      {
        id: 9,
        logo: PARTNER_LOGO
      }
    ]
  },
  {
    id: 3,
    type: 'XXXX',
    members: [
      {
        id: 1,
        logo: PARTNER_LOGO
      },
      {
        id: 2,
        logo: PARTNER_LOGO
      },
      {
        id: 3,
        logo: PARTNER_LOGO
      },
      {
        id: 4,
        logo: PARTNER_LOGO
      },
      {
        id: 5,
        logo: PARTNER_LOGO
      },
      {
        id: 6,
        logo: PARTNER_LOGO
      },
      {
        id: 7,
        logo: PARTNER_LOGO
      },
      {
        id: 8,
        logo: PARTNER_LOGO
      },
      {
        id: 9,
        logo: PARTNER_LOGO
      }
    ]
  }
];

function Partners() {
  return (
    <section
      className="partners-container full-screen-container bg-gray at-least-one-screen"
      id="partners"
    >
      <Title title="XXX" subTitleColor="#011088" />
      {partners.map(groupOfOneType => {
        const { type } = groupOfOneType;
        return (
          <section className="margin-top-md" key={groupOfOneType.id}>
            {type ? <h1 className="text-center partner-type">{type}</h1> : null}
            <CardColumns className="partici-group block-center">
              {groupOfOneType.members.map(member => (
                <Card
                  className="rounded-lg partner-card text-center"
                  key={member.id}
                >
                  <Card.Img
                    className="partner-logo"
                    variant="top"
                    src={member.logo}
                  />
                </Card>
              ))}
            </CardColumns>
          </section>
        );
      })}
    </section>
  );
}

export default React.memo(Partners);
