import React, {FunctionComponent} from 'react';

export interface IBoxHeaderProps {
  title: string;
}

export const IBoxHeader: FunctionComponent<IBoxHeaderProps> = props => {
  return (
    <div className="ibox-title">
      <h5>{props.title}</h5>
      {props.children}
    </div>
  );
};
