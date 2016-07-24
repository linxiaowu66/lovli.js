import React from 'react';

import TableItem from './TableItem';

//import styles from './styles';

export default ({ tables, horizon }) => (
  <tbody>
  {
    tables.map(
       item => (
         <TableItem
           key={item.id}
           item={item}
           horizon={horizon}
         />
       )
    )}
  </tbody>
);
