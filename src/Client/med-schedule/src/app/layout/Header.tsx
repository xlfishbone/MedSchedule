import React, {FunctionComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {FormGroup, FormControl, Form} from 'react-bootstrap';

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
          <Form className="navbar-form-custom">
            <Form.Group>
              <Form.Control type="text" placeholder="Search for something..." name="top-search" id="top-search" />
            </Form.Group>
          </Form>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li>
            <Link to="/logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
              {'   '}
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
