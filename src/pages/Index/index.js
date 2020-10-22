import React, { Component } from 'react';
import { connect } from 'dva';
import { List, Row, Col, Button } from 'tea-component';

import Title from './Title';
import styles from './index.less';

export default class IndexPage extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  render() {
    console.log(this.props);
    const style = { marginRight: 5 };
    return (
      <Row>
        <Col>
          <Title>TEA-UI 演示</Title>
          <List split="stripe">
            <List.Item className={styles.line}> 按钮 </List.Item>
            <List.Item className={styles.line}>
              <Button style={style} type="primary">
                主要按钮
              </Button>
              <Button loading style={style} type="primary">
                主要按钮
              </Button>
              <Button disabled style={style} type="primary">
                禁用
              </Button>
              <Button style={style} type="pay">
                支付按钮
              </Button>
            </List.Item>
          </List>
        </Col>
      </Row>
    );
  }
}
