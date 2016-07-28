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
const TableItem = ({ item, horizon }) => {
  const collection = horizon('lg_table');
  const addTodo = (name, subjects, sports, sex) => createDoc(collection, { name: name, subjects: subjects, sports: sports, sex: sex});
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
        <Option key='yuwen' >yuwen</Option>
        <Option key='tiyu' >tiyu</Option>
        <Option key='dili' >dili</Option>
        <Option key='lishi' >lishi</Option>
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
        <Option key='0' >0</Option>
        <Option key='1' >1</Option>
        <Option key='2' >2</Option>
        <Option key='3' >3</Option>
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
          let subjects = document.getElementById('subjects').value;
          let sports = document.getElementById('sports').value;
          let sex = document.getElementById('sex').value;
          addTodo(name, subjects, sports, sex);
        }}
        >
        Add
      </Button>
    </td>
  </tr>
  );
};

export default TableItem;
