import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ vcLogin }) => ({ vcLogin }))
export default class IndexPage extends Component {
  static defaultProps = {};
   constructor(props) {
     super(props);
     this.state ={

     }
   }
  render() {
    console.log(this.props.children)
    return (
      <div>11111
{this.props.children}
      </div>
    );
  }
}
