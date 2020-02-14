import React, {FunctionComponent} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
  name?: string;
}

export const Header: FunctionComponent<HeaderProps> = props => {
  return (
    <div className="row border-bottom">
      <nav className="navbar navbar-static-top white-bg mb-0" role="navigation">
        <div className="navbar-header">
          <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
            <FontAwesomeIcon icon={faBars} />{' '}
          </a>
          <form role="search" className="navbar-form-custom" method="post" action="#">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search for something..."
                className="form-control"
                name="top-search"
                id="top-search"
              />
            </div>
          </form>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <a href="#">
              {' '}
              <FontAwesomeIcon icon={faSignOutAlt} /> Log out{' '}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
