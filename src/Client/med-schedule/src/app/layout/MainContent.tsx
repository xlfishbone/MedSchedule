import React, {FunctionComponent} from 'react';

interface MainContentProps {}

export const MainContent: FunctionComponent<MainContentProps> = props => (
  <div className="wrapper wrapper-content animated fadeInRight">{props.children}</div>
);
