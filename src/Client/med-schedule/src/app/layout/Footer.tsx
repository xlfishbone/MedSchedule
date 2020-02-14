import React, {FunctionComponent} from 'react';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = props => (
  <div className="footer">
    <div className="pull-right">
      10GB of <strong>250GB</strong> Free.
    </div>
    <div>
      <strong>Copyright</strong> Example Company &copy; 2014-2019
    </div>
  </div>
);
