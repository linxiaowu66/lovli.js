import React from 'react';
import { subscribe } from 'horizon-react';

import TableBody from './TableBody';
import TableHead from './TableHead';

//import styles from './styles';

const mapDataToProps = {
  tables: (hz, props) => hz('tables').limit(props.limit)
};

const TableBox = (props) => (
  <table className = 'table table-bordered table-striped table-hover'>
    <TableHead titles = {props.colTitle} />
    <TableBody tables = {props.tables}
                horizon = {props.horizon}
    />
  </table>
);

export default subscribe({
  mapDataToProps
})(TableBox);