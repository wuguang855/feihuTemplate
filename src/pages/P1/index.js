/**
 * 函数组件示例
 */
import React, { Component } from 'react';
import Title from './Title'
import { withTranslation } from 'react-i18next';

@withTranslation()
export default class IndexPage extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props
    return (
      <div>
        <Title>{t('标题')}</Title>
      </div>
    );
  }
}
