import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThLarge} from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {}

export const SideNavBar: FunctionComponent<NavBarProps> = props => (
  <nav className="navbar-default navbar-static-side" role="navigation">
    <div className="sidebar-collapse">
      <ul className="nav metismenu" id="side-menu">
        <li className="nav-header">
          <div className="dropdown profile-element">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <span className="block m-t-xs font-bold">Example user</span>
              <span className="text-muted text-xs block">
                menu <b className="caret"></b>
              </span>
            </a>
            <ul className="dropdown-menu animated fadeInRight m-t-xs">
              <li>
                <a className="dropdown-item" href="login.html">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="logo-element">IN+</div>
        </li>
        <li>
          <Link className="nav-label" to="/employees">
            <FontAwesomeIcon className="mr-2" icon={faThLarge} /> Employees
          </Link>
        </li>
        <li className="active">
          <Link className="nav-label" to="/">
            <FontAwesomeIcon className="mr-2" icon={faThLarge} />
            Example
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
