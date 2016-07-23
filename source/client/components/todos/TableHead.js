import React from 'react';

import styles from './styles';

export default ({ titles }) => (
  <thead className = 'tableHead'>
    <tr>
      {
        titles.map(
          title => (
            <th key={title.id}>
              {title}
            </th>
          )
        )}
      </tr>
  </thead>
);