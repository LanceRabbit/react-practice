import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import User from './User.js';
import Header from './components/Header.js';
import Content from './components/Content.js';
import './Home.less';

export default class Home extends Component {
/*
  state = {
    name: 'User'
  };

// the below stting is as same as state
  constructor() {
    super();
    this.state = {
      name: 'User'
    };
  }
*/

  render() {
    return (
      <div id="pageHome">
        <Header />
        <Content />
        <User name="Andy" desc="Test 1"/>
        <User name="Ben" desc="Etes 2"/>
        <User name="Candy" desc="Sete 3"/>
        <User name="David" desc="ETTS 4"/>
      </div>
    );
  }
}
