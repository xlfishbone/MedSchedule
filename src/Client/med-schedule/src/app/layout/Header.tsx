import React, {FunctionComponent} from 'react';

interface HeaderProps {
  name?: string;
}

export const Header: FunctionComponent<HeaderProps> = props => {
  return <h1>Hello, {props.name}</h1>;
};
