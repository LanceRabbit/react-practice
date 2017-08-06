import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
/**
import PropTypes, 再定義propType的格式
*/
  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
  }
  render() {
    const name = this.props.name;
    const desc = this.props.desc;
    return (
      <div>
        <p>component: {name }</p>
        <p>state has componentName: { desc }</p>
      </div>
    );
  }
}
export default User;
