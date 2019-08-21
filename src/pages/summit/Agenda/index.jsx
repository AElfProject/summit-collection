import React from 'react';
import Table from 'react-bootstrap/Table';

import './index.less';

const agendaList = [
  {
    id: 1,
    time: '14:00-17:00',
    speakTitle: 'AElf是如何实现高Tps的',
    speaker: '马昊博（XXXXX）'
  },
  {
    id: 2,
    time: '14:00-17:00',
    speakTitle: 'AElf是如何实现高Tps的',
    speaker: '马昊博（XXXXX）'
  },
  {
    id: 3,
    time: '14:00-17:00',
    speakTitle: 'AElf是如何实现高Tps的',
    speaker: '马昊博（XXXXX）'
  },
  {
    id: 4,
    time: '14:00-17:00',
    speakTitle: 'AElf是如何实现高Tps的',
    speaker: '马昊博（XXXXX）'
  },
  {
    id: 5,
    time: '14:00-17:00',
    speakTitle: 'AElf是如何实现高Tps的',
    speaker: '马昊博（XXXXX）'
  },
  {
    id: 6,
    time: '14:00-17:00',
    speakTitle: 'AElf是如何实现高Tps的',
    speaker: '马昊博（XXXXX）'
  }
];

export default function Agenda() {
  return (
    <div
      className="agenda-container full-screen-container bg-black text-center"
      id="agenda"
    >
      <h1 className="title white">2019</h1>
      <h1 className="subtitle white">大会议程</h1>
      <p style={{ textAlign: 'center' }}>（2019 - 08 - 18 14:00 ~ 17:00）</p>
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
