import React from 'react';
import { subscribe } from 'horizon-react';
import { createDoc } from 'horizon-react/lib/utils';
import { Input, Select, Radio, Button } from 'antd';
import styles from './styles';

/**
 * A single todo list item.
 *
 * Includes a remove action.
 *
 * @param  {Object} todo    The todo item
 * @param  {Object} horizon The horizon object which will be passed to deleteDoc
 * @return {ReactElement}
 */
const TableItem = ({ item, allSports, allSubjects, horizon }) => {
  const lgCollection = horizon('lg_table');
  const sportCollection = horizon('sport_table');
  const addTable = (name, subjects, sports, sex) => createDoc(lgCollection, { name: name, subjects: subjects, sports: sports, sex: sex});
  const addSportTable = (sport) => createDoc(sportCollection,{ sport: sport });
  const Option = Select.Option;
  const RadioGroup = Radio.Group;
  //console.log(item.content.subjects);
  return (
  <tr key={item.id}>
    <td><Input
          placeholder='what is your name?'
          id='name'
          className={styles.input}
          defaultValue={item.content.name}
          style={{width: 300}}
        />
    </td>
    <td>
      <Select
        multiple
        style={{width: 300}}
        id='subjects'
        onChange={(value) => {
          console.log(`selected ${value}`);
        }}
        placeholder="what is your favor subjects"
        optionFilterProp="children"
        notFoundContent="Nothing"
        defaultValue={item.content.subjects}
        >
        {
          allSubjects.map (subject => (
            <Option key={subject} >{subject}</Option>      
          )
        )}  
      </Select>
    </td>
    <td>
      <Select
        tags
        style={{width: 300}}
        id='sports'
        onChange={(value) => {
          console.log(`selected ${value}`);
        }}
        placeholder="what is your favor sports"
        optionFilterProp="children"
        notFoundContent="Nothing"
        defaultValue={item.content.sports}
        >
        {
          allSports.map ( sport => (
            <Option key={sport}>{sport}</Option>
          ))
        }
      </Select>
    </td>
    <td>
      <RadioGroup
        id='sex'
        onChange={(e) => {
          console.log('radio checked', e.target.value);
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
          let name = document.getElementById('name').value;
          let subject = document.getElementById('subjects').value;
          let sport = document.getElementById('sports').value;
          let sex = document.getElementById('sex').value;

          let subHTMLArray = subject.getElementsByClassName('ant-select-selection__choice__content');
          let subArray = [], sportArray=[];
          for (let index = 0; index < subHTMLArray; index++){
            subArray.push(subHTMLArray[index].innerHTML);
          }
          let spoHTMLArray = sport.getElementsByClassName('ant-select-selection__choice__content');

          for (let index = 0; index < spoHTMLArray; index++){
            sportArray.push(spoHTMLArrayArray[index].innerHTML);
          }
          
          let newSpoArray = [];

          sportArray.map(sport => {
            if (allSports.indexOf(sport) === -1){
              newSpoArray.push(sport);
            }
          })
          
          newSpoArray.map(sport =>{
            addSportTable(sport);
          })
          addTable(name, subjects, sports, sex);
        }}
        >
        Add
      </Button>
    </td>
  </tr>
  );
};

export default TableItem;
