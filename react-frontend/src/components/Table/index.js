import React from 'react';
import './style.scss';

export default props => {
  const { children, className } = props;
  return <table className={`table ${className || ''}`}>{children}</table>;
};
