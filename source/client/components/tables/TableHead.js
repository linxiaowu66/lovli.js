import React from 'react';

//import styles from './styles';

export default ({ titles }) => (
  <thead>
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