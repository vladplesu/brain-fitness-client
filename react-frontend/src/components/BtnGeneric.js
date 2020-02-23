import React from 'react';
import './scss/BtnGeneric.scss';

const BtnGeneric = props => (
  <button className={`BtnGeneric ${props.btnType}`} disabled={props.disabled}>
    <span>{props.btnIcon}</span>
    <span>{props.btnText}</span>
  </button>
);

export default BtnGeneric;
