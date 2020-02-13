import React, {FunctionComponent} from 'react';

interface WidgetProps {}

export const Widget: FunctionComponent<WidgetProps> = props => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Card title</h4>
      <div>
        {/* render children */}
        {props.children}
      </div>
    </div>
  </div>
);
