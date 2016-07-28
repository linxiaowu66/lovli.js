import React from 'react';
import { subscribe } from 'horizon-react';

import TableBody from './TableBody';

import styles from './styles';


const TableBox = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Subjects</th>
        <th>Sports</th>
        <th>Sex</th>
        <th>Action</th>
      </tr>
    </thead>
    <TableBody limit={100} />
  </table>
);

export default TableBox;
