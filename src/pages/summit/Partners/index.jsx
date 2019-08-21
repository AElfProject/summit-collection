import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import Title from '@components/Title/';
import PARTNER_LOGO from '@img/partner-logo.png';
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
    type: '媒体',
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
    type: '社区支持',
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

export default function Partners() {
  return (
    <section
      className="partners-container full-screen-container bg-gray"
      id="partners"
      style={{ minHeight: '100vh' }}
    >
      <Title title="参与者" subTitleColor="#011088" />
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
