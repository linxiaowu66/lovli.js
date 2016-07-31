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
    this.state = {
      content: [
        {id: 0, complete: false},
        {id: 1, complete: false},
        {id: 2, complete: false},
        {id: 3, complete: false}
      ]
    };
    this.handleAddAction = this.handleAddAction.bind(this);
  }

  handleAddAction(index){
    console.log(index)
    let tableData = this.state.content;
    let completeNum = 0;

    tableData[index].complete = true;

    tableData.map(item => {
      if(item.complete === true){
        completeNum++;
      }
    });

    /*If the incomplete row has only one, we can add a new one
    * to be sure there is always one empty row*/
    if (completeNum === (tableData.length - 1)) {
      let newItem = {id: tableData.length, complete: false}
      tableData.push(newItem);
    }

    this.setState({content: tableData});
  }
  render() {
    return (
      <tbody>
      {this.state.content.map(
        item => (
          <TableItem
            key={item.id}
            index={item.id}
            items={this.props.items}
            allSubjects={this.props.allSubjects}
            allSports={this.props.allSports}
            horizon={this.props.horizon}
            handleAddAction={this.handleAddAction}

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
