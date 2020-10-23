import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { List, Row, Col, Button } from 'tea-component';

import Title from './Title';
import styles from './index.less';

@withTranslation()
export default class IndexPage extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { t } = this.props;
    const style = { marginRight: 5 };
    return (
      <Row>
        <Col>
          <Title>{t('TEA-UI演示')}</Title>
          <List split="stripe">
            <List.Item className={styles.line}> {t('按钮')} </List.Item>
            <List.Item className={styles.line}>
              <Button style={style} type="primary">
                {t('主要按钮')}
              </Button>
              <Button loading style={style} type="primary">
                {t('主要按钮')}
              </Button>
              <Button disabled style={style} type="primary">
                {t('禁用')}
              </Button>
              <Button style={style} type="pay">
                {t('支付按钮')}
              </Button>
            </List.Item>
          </List>
        </Col>
      </Row>
    );
  }
}
