import React, {FunctionComponent} from 'react';

export const IBoxContent: FunctionComponent = props => {
  return <div className="ibox-content">{props.children}</div>;
};
