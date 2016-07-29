import React from 'react';
import { subscribe } from 'horizon-react';

import TableItem from './TableItem';

import styles from './styles';

const mapDataToProps = {
  items: (hz, props) => hz('lg_table').limit(props.limit),
  allSports: (hz, props) => hz('sport_table').limit(props.limit),
  allSubjects: (hz, props) => hz('subject_table').limit(props.limit)
};

const TableBody = (props) => (

 <tbody>
      {props.items.map(
        item => (
          <TableItem
            key={item.id}
            item={item}
            allSports={props.allSports}
            allSubjects={props.allSubjects}
            horizon={props.horizon}
          />
        )
      )}
    </tbody>
);

export default subscribe({
  mapDataToProps
})(TableBody);
