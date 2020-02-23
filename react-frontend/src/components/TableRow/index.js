import React from 'react';
import './style.scss';

export default props => {
  const { children, className } = props;
  return <tr className={`table-row ${className || ''}`}>{children}</tr>;
};
