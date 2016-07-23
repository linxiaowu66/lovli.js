import React from 'react';

import Logo from './Logo';
import TodoList from './todos/TodoList';
import AddTodoButton from './todos/AddTodoButton';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import "//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css"
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js";

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
      <TableBox limit={100} />
      // <AddTodoButton />
    </div>

  </div>
);

export default App;
