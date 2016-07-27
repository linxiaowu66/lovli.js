import React from 'react';

import Logo from './Logo';
import TodoList from './todos/TodoList';
import TabelBox from './todos/TableBox';
import AddTodoButton from './todos/AddTodoButton';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
/*import "static/vendor/bootstrap/dist/css/bootstrap.min.css"
import "static/vendor/jquery/dist/jquery.min.js";
import "static/vendor/bootstrap/dist/js/bootstrap.min.js";*/

import styles from 'styles/app';

const App = () => (
  <div>
    <div className={styles.container}>
      <Logo />
      <p className={styles.tCenter}>
        <b>Welcome.</b>
        <br />
        You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
      </p>
      <TabelBox />
    </div>

  </div>
);

export default App;
