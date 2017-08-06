import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <h1>Hello, We are ReactMaker!</h1>
        <h2>This is Content Component!</h2>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
      </div>
    );
  }
}
