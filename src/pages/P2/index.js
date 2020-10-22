/**
 * 多语言切换示例
 */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

@withTranslation()
export default class P2 extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state={
      language:'en'
    }
  }
  changeLanguage(){
    const {i18n} = this.props;
    const language = this.state.language ==='en'?'zh':'en'
     this.setState({
      language
     })
      i18n.changeLanguage(language);
  }
  render() {
    const { t } = this.props
    return (
    <div onClick={this.changeLanguage.bind(this)}>{t('hello')}</div>
    );
  }
}
