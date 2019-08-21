import React from 'react';
import Table from 'react-bootstrap/Table';

import './index.less';

const agendaList = [
  {
    id: 1,
    time: 'XX:XX-XX:XX',
    speakTitle: 'XXXXXXXXXX',
    speaker: 'xxxxxxxx'
  },
  {
    id: 2,
    time: 'XX:XX-XX:XX',
    speakTitle: 'XXXXXXXXXX',
    speaker: 'xxxxxxxx'
  },
  {
    id: 3,
    time: 'XX:XX-XX:XX',
    speakTitle: 'XXXXXXXXXX',
    speaker: 'xxxxxxxx'
  },
  {
    id: 4,
    time: 'XX:XX-XX:XX',
    speakTitle: 'XXXXXXXXXX',
    speaker: 'xxxxxxxx'
  },
  {
    id: 5,
    time: 'XX:XX-XX:XX',
    speakTitle: 'XXXXXXXXXX',
    speaker: 'xxxxxxxx'
  },
  {
    id: 6,
    time: 'XX:XX-XX:XX',
    speakTitle: 'XXXXXXXXXX',
    speaker: 'xxxxxxxx'
  }
];

export default function Agenda() {
  return (
    <div
      className="agenda-container full-screen-container bg-black text-center at-least-one-screen"
      id="agenda"
    >
      <h1 className="title white">XXXX</h1>
      <h1 className="subtitle white">XXXX</h1>
      <p style={{ textAlign: 'center' }}>（XXXX - XXXX - XX - XX）</p>
      <Table
        className="agenda-table block-center"
        responsive="xl"
        variant="dark"
        size="lg"
      >
        <tbody>
          {agendaList.map(agenda => (
            <tr key={agenda.id}>
              <td>{agenda.time}</td>
              <td>{agenda.speakTitle}</td>
              <td>{agenda.speaker}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
