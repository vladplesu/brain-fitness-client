import React from 'react';
import './style.scss';

export default props => {
  const { children, className, component, scope } = props;
  let Component;
  if (component) {
    Component = component;
  } else {
    Component = 'td';
  }
  return (
    <Component className={`table-cell ${className || ''}`} scope={scope}>
      {children}
    </Component>
  );
};
