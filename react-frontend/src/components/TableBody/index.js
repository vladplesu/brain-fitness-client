import React from 'react';
import './style.scss';

export default props => {
  const { children, className } = props;
  return <tbody className={`table-body ${className || ''}`}>{children}</tbody>;
};
