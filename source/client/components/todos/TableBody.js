import React from 'react';

import TableItem from './TableItem';

import styles from './styles';

export default ({ tables, horizon }) => (
  <tbody className = 'tableBody'  >
  {
    tables.map(
       item => (
         <TodoItem
           key={item.id}
           item={item}
           horizon={horizon}
         />
       )
    )}
  </tbody>
);
