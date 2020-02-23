import React from 'react';
import './style.scss';

export default props => {
  const { children, className } = props;
  return <thead className={`table-head ${className || ''}`}>{children}</thead>;
};
