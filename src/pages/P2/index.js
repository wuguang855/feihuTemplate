import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ vcLogin }) => ({ vcLogin }))
export default class IndexPage extends Component {
  static defaultProps = {};
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props)
    return (
      <div>2222</div>
    );
  }
}
