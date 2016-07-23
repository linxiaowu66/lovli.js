import React from 'react';
import { deleteDoc } from 'horizon-react/lib/utils';
import { Input Select Radio  } from 'antd';

import styles from './styles';

const Option = Select.Option;
const RadioGroup = Radio.Group;

let secondColChildren = [], thirdColChildren = [];
for (let i = 10; i < 36; i++) {
  secondColChildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

for (let i = 10; i < 36; i++) {
  thirdColChildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChangeForSecondCol(value) {
  console.log(`second column selected ${value}`);
}

function handleChangeForThirdCol(value) {
  console.log(`third column selected ${value}`);
}

/**
 * A single todo list item.
 *
 * Includes a remove action.
 *
 * @param  {Object} todo    The todo item
 * @param  {Object} horizon The horizon object which will be passed to deleteDoc
 * @return {ReactElement}
 */
export default ({ todo, horizon }) => (

  <tr>
    <td><Input placeholder="基本使用"></Input></td>
    <td>
        <Select
        multiple
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChangeForSecondCol}
      >
        {secondColChildren}
      </Select>
    </td>
    <td>
      <Select tags
              style={{ width: '100%' }}
              searchPlaceholder="标签模式"
              onChange={handleChangeForThirdCol}
      >
        {thirdColChildren}
      </Select>
    </td>
    <td>
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio key="a" value={1}>A</Radio>
        <Radio key="b" value={2}>B</Radio>
      </RadioGroup>
    </td>
  </tr>

/*  <li className={styles.item} key={todo.id}>
    <span className={styles.caption}>{todo.text || '-'}</span>
    <span className={styles.actions}>
      <i
        className="fa fa-remove"
        onClick={() => {
          deleteDoc(horizon('todos'), { id: todo.id });
        }}
      />
    </span>
  </li>*/
);
