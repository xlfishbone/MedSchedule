import React, {FunctionComponent} from 'react';

interface PageWrapperProps {}

export const PageWrapper: FunctionComponent<PageWrapperProps> = props => (
  <div id="page-wrapper" className="gray-bg">
     {/* render children */}
     {props.children}
  </div>
);
