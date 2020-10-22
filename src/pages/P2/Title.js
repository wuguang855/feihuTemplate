/**
 * 函数组件示例
 */
import React from 'react';
import PropTypes from 'prop-types';

function Title({ children }) {
  return <h4 style={{ margin: '20px 0' }}>{children}</h4>;
}

Title.propTypes = { children: PropTypes.node };

export default Title;
