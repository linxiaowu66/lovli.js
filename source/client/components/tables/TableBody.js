import React , { Component }from 'react';
import { subscribe } from 'horizon-react';
import TableItem from './TableItem';

import styles from './styles';

const mapDataToProps = {
  items: (hz, props) => hz('lg_table').order('id').limit(props.limit),
  allSports: (hz, props) => hz('sport_table').order('id').limit(props.limit),
  allSubjects: (hz, props) => hz('subject_table').order('id').limit(props.limit)
};

class TableBody extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <tbody>
      {this.props.items.map(
        item => (
          <TableItem
            key={item.id}
            item={item}
            allItems = {this.props.items}
            allSubjects={this.props.allSubjects}
            allSports={this.props.allSports}
            horizon={this.props.horizon}
          />
        )
      )}
      </tbody>
    );
  }
}

/*const TableBody = (props) => (

 <tbody>
      {props.content.map(
        item => (
          <TableItem
            key={item.id}
            item={item}
          />
        )
      )}
    </tbody>
);

export default connect({
  mapStateToProps
})(TableBody)*/
export default subscribe({
  mapDataToProps
})(TableBody);
