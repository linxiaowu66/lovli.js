import React , { Component, PropTypes } from 'react';
import { subscribe } from 'horizon-react';
import { createDoc, updateDoc } from 'horizon-react/lib/utils';
import { Input, Select, Radio, Button } from 'antd';
import styles from './styles';

export default class TableItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      subjects: [],
      sports: [],
      sex: ''
    };
  }
  componentWillReceiveProps(nextProps){
    let index = nextProps.index;
    if (nextProps.items.length !== 0 && nextProps.items.length >= (index + 1)) {
      let item = nextProps.items[index];
      console.log(this.state.name);
      this.setState({
        name: item.content.name,
        subjects: item.content.subjects,
        sports: item.content.sports,
        sex: item.content.sex
      });
    }else{
      this.setState({
        name: '',
        subjects: [],
        sports: [],
        sex: ''
      });
    }
  }
  render(){
    const allSubjects = this.props.allSubjects;
    const allSports = this.props.allSports;
    const lgCollection = this.props.horizon('lg_table');
    const sportCollection = this.props.horizon('sport_table');
    const addTable = (studentTable) => createDoc(lgCollection, {
      content: studentTable,
      id: this.props.index,
      $hz_v$:this.props.index
    });
    const addSportTable = (sport) => createDoc(sportCollection, { sport: sport });
    const Option = Select.Option;
    const RadioGroup = Radio.Group;

    return (
      <tr key={this.props.index}>
        <td>
          <Input
            placeholder='what is your name?'
            id='name'
            className={styles.input}
            value={this.state.name}
            style={{width: 200}}
            onChange={(e) => {
              this.setState({name: e.target.value});
            }}
          />
        </td>
        <td>
          <Select
            multiple
            style={{width: 200}}
            placeholder="what is your favor subjects"
            optionFilterProp="children"
            notFoundContent="Nothing"
            value={this.state.subjects}
            onChange={(value) => {
              this.setState({subjects: value});
            }}
          >
            {
              allSubjects.map(item => (
                  <Option key={item.subject}>{item.subject}</Option>
                )
              )}
          </Select>
        </td>
        <td>
          <Select
            tags
            style={{width: 200}}
            placeholder="what is your favor sports"
            optionFilterProp="children"
            notFoundContent="Nothing"
            value={this.state.sports}
            onChange={(value) => {
              this.setState({sports: value});
            }}
          >
            {
              allSports.map(item => (
                <Option key={item.sport}>{item.sport}</Option>
              ))
            }
          </Select>
        </td>
        <td>
          <RadioGroup
            id='sex'
            value={this.state.sex}
            style={{width: 100}}
            className={styles.radioBox}
            onChange={(e) => {
              this.setState({sex: e.target.value});
            }}
          >
            <Radio key="0" value='male'>male</Radio>
            <Radio key="1" value='female'>female</Radio>
          </RadioGroup>
        </td>
        <td>
          <Button
            type="primary"
            onClick={() => { 
              let newSpoArray = [];
              let existingSports = [];

              allSports.map(item => {
                existingSports.push(item.sport)
              });

              this.state.sports.map(sport => {
                if (existingSports.indexOf(sport) === -1){
                  newSpoArray.push(sport);
                }
              });

              newSpoArray.map((sport) =>{
                addSportTable(sport);
              });

              let studentTable = {
                name: this.state.name,
                subjects: this.state.subjects,
                sports: this.state.sports,
                sex: this.state.sex
              };

              addTable(studentTable);
              this.props.handleAddAction(this.props.index);
            }}
          >
            Add
          </Button>
        </td>
      </tr>
    )
  }
}



/*export default class TableItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      subjects: [],
      sports: [],
      sex: ''
    };

  }
  componentDidMount(){
    let index = this.props.index;
    let item = this.props.items[index];
    this.setState({
      name: item.content.name,
      subjects: item.content.sunjects,
      sports: item.content.sports,
      sex: item.content.sex
    });
  }
  componentWillReceiveProps(nextProps){
    let index = nextProps.index;
    if (nextProps.items.length !== 0 && nextProps.items.length >= (index + 1)) {
      let item = nextProps.items[index];
      console.log(this.state.name);
      this.setState({
        name: item.content.name,
        subjects: item.content.subjects,
        sports: item.content.sports,
        sex: item.content.sex
      });
    }else{
      this.setState({
        name: '',
        subjects: [],
        sports: [],
        sex: ''
      });
    }
  }

  render(){
    const allSubjects = this.props.allSubjects;
    const allSports = this.props.allSports;
    const lgCollection = this.props.horizon('lg_table');
    const sportCollection = this.props.horizon('sport_table');
    const addTable = (studentTable) => createDoc(lgCollection, {
      content: studentTable,
      id: this.props.index,
      $hz_v$:this.props.index
    });
    const addSportTable = (sport) => createDoc(sportCollection, { sport: sport });

    const Option = Select.Option;
    const RadioGroup = Radio.Group;
    let studentName = '';
    let subjectsArray = [];
    let sportsArray = [];
    let sexString = '';

    return (
      <tr key={this.props.index}>
        <td>
          <Input
            placeholder='what is your name?'
            id='name'
            className={styles.input}
            value={this.state.name}
            style={{width: 300}}
            onChange={(e) => {
              studentName = e.target.value;
              this.setState({name: e.target.value});
            }}
          />
        </td>
        <td id='subjects'>
          <Select
            multiple
            style={{width: 300}}
            onChange={(value) => {
              console.log(`selected ${value}`);
              subjectsArray = value;
            }}
            placeholder="what is your favor subjects"
            optionFilterProp="children"
            notFoundContent="Nothing"
            defaultValue={this.state.subjects}
          >
            {
              allSubjects.map(item => (
                  <Option key={item.subject}>{item.subject}</Option>
                )
              )}
          </Select>
        </td>
        <td id='sports'>
          <Select
            tags
            style={{width: 300}}
            onChange={(value) => {
              sportsArray = value;
            }}
            placeholder="what is your favor sports"
            optionFilterProp="children"
            notFoundContent="Nothing"
            defaultValue={this.state.sports}
          >
            {
              allSports.map(item => (
                <Option key={item.sport}>{item.sport}</Option>
              ))
            }
          </Select>
        </td>
        <td>
          <RadioGroup
            id='sex'
            onChange={(e) => {
                  sexString = e.target.value;
                }}
            defaultValue={this.state.sex}
            style={{width: 300}}
          >
            <Radio key="0" value='male'>male</Radio>
            <Radio key="1" value='female'>female</Radio>
          </RadioGroup>
        </td>
        <td>
          <Button
            type="primary"
            onClick={() => { 
              let newSpoArray = [];
              let existingSports = [];

              allSports.map(item => {
                existingSports.push(item.sport)
              })

              sportsArray.map(sport => {
                if (existingSports.indexOf(sport) === -1){
                  newSpoArray.push(sport);
                }
              })

              console.log('new sport array = ' + newSpoArray);

              newSpoArray.map((sport, index) =>{
                console.log(`sport id = ${index}`)
                addSportTable(sport, index);
              });
              let studentTable = {
                name: studentName,
                subjects: subjectsArray,
                sports: sportsArray,
                sex: sexString
              }
              console.log(studentTable);
              addTable(studentTable);
            }}
          >
            Add
          </Button>
        </td>
      </tr>
    )
  }
}*/

/**
 * A single todo list item.
 *
 * Includes a remove action.
 *
 * @param  {Object} todo    The todo item
 * @param  {Object} horizon The horizon object which will be passed to deleteDoc
 * @return {ReactElement}
 */
/*const TableItem = ({ item, allSports, allSubjects, horizon }) => {
 const lgCollection = horizon('lg_table');
 const sportCollection = horizon('sport_table');
 const updateTable = (studentTable) => updateDoc(lgCollection, { content: studentTable, id: item.id, $hz_v$: item.id});
 const addSportTable = (sport, index) => createDoc(sportCollection,{ sport: sport, $hz_v$:index,  id: index});
 const Option = Select.Option;
 const RadioGroup = Radio.Group;
 let name = '';
 let subjectsArray = [];
 let sportsArray = [];
 let sexString = '';

 return (
 <tr key={item.id}>
 <td>
 <Input
 placeholder='what is your name?'
 id='name'
 className={styles.input}
 value={item.content.name}
 style={{width: 300}}
 onChange={(e) => {
 name = e.target.value;
 item.content.name = e.target.value;
 }}
 />
 </td>
 <td id = 'subjects'>
 <Select
 multiple
 style={{width: 300}}
 onChange={(value) => {
 console.log(`selected ${value}`);
 subjectsArray = value;
 }}
 placeholder="what is your favor subjects"
 optionFilterProp="children"
 notFoundContent="Nothing"
 defaultValue={item.content.subjects}
 >
 {
 allSubjects.map (item => (
 <Option key={item.subject} >{item.subject}</Option>
 )
 )}
 </Select>
 </td>
 <td id = 'sports'>
 <Select
 tags
 style={{width: 300}}
 onChange={(value) => {
 sportsArray = value;
 }}
 placeholder="what is your favor sports"
 optionFilterProp="children"
 notFoundContent="Nothing"
 defaultValue={item.content.sports}
 >
 {
 allSports.map ( item => (
 <Option key={item.sport}>{item.sport}</Option>
 ))
 }
 </Select>
 </td>
 <td>
 <RadioGroup
 id='sex'
 onChange={(e) => {
 sexString = e.target.value;
 }}
 defaultValue={item.content.sex}
 style={{width: 300}}
 >
 <Radio key="0" value='male'>male</Radio>
 <Radio key="1" value='female'>female</Radio>
 </RadioGroup>
 </td>
 <td>
 <Button
 type="primary"
 onClick={() => { 
 let newSpoArray = [];
 let existingSports = [];

 allSports.map(item => {
 existingSports.push(item.sport)
 })

 sportsArray.map(sport => {
 if (existingSports.indexOf(sport) === -1){
 newSpoArray.push(sport);
 }
 })

 console.log('new sport array = ' + newSpoArray);

 newSpoArray.map((sport, index) =>{
 console.log(`sport id = ${index}`)
 addSportTable(sport, index);
 })
 let studentTable = {
 name: name,
 subjects: subjectsArray,
 sports: sportsArray,
 sex: sexString
 }
 updateTable(studentTable);
 }}
 >
 Add
 </Button>
 </td>
 </tr>
 );
 };*/

//export default TableItem;
