import React, {FunctionComponent} from 'react';

export const ExampleScreen: FunctionComponent = props => (
  <div className="row">
    <div className="col-lg-12">
      <div className="text-center m-t-lg m-b-lg">
        <h1>Simple examples</h1>
        <small>Few basic examples</small>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Panel example</h5>
          <div className="ibox-tools">
            <a className="collapse-link" href="">
              <i className="fa fa-chevron-up"></i>
            </a>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-wrench"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="#">Config option 1</a>
              </li>
              <li>
                <a href="#">Config option 2</a>
              </li>
            </ul>
            <a className="close-link" href="">
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div className="ibox-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Table example</h5>
          <div className="ibox-tools">
            <a className="collapse-link" href="">
              <i className="fa fa-chevron-up"></i>
            </a>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-wrench"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="#">Config option 1</a>
              </li>
              <li>
                <a href="#">Config option 2</a>
              </li>
            </ul>
            <a className="close-link" href="">
              <i className="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div className="ibox-content">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Task</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project</td>
                  <td>20%</td>
                  <td>Jul 14, 2013</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-check text-navy"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Alpha project</td>
                  <td>40%</td>
                  <td>Jul 16, 2013</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-check text-navy"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Betha project</td>
                  <td>75%</td>
                  <td>Jul 18, 2013</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-check text-navy"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Gamma project</td>
                  <td>18%</td>
                  <td>Jul 22, 2013</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-check text-navy"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
