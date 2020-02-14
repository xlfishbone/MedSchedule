import React, {FunctionComponent} from 'react';

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
          <a href="index.html">
            <i className="fa fa-th-large"></i> <span className="nav-label">Main view</span>
          </a>
        </li>
        <li className="active">
          <a href="minor.html">
            <i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span>{' '}
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
