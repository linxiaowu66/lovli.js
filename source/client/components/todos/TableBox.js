import React from 'react';
import { subscribe } from 'horizon-react';

import TableBody from './TableBody';

import styles from './styles';


const TableBox = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Grade</th>
        <th>Class</th>
        <th>Sex</th>
      </tr>
    </thead>
    <TableBody limit={100} />
  </table>
);

export default TableBox;
