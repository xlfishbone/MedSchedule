import React, {FunctionComponent, ReactNode, ReactChild, Component} from 'react';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faChevronUp, faWrench, faTimes} from '@fortawesome/free-solid-svg-icons';

// tslint:disable-next-line:no-empty-interface
interface IBoxProps {}

export const IBox: FunctionComponent<IBoxProps> = props => {
  return <div className="ibox float-e-margins">{props.children}</div>;
};
