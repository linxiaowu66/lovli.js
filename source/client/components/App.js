import React from 'react';

import Logo from './Logo';
import TabelBox from './tables/TableBox';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import 'static/vendor/antd/antd.css';
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
