import React, {FunctionComponent} from 'react';
import {Table, Button} from 'react-bootstrap';
import {IBox} from '../layout/ibox/IBox';
import {IBoxContent} from '../layout/ibox/IBox.Content';
import {IBoxHeader} from '../layout/ibox/Ibox.Header';

export const ExampleScreen: FunctionComponent = props => {
  // const local_state = {};

  return (
    <IBox>
      <IBoxHeader title="Employee List" />
      <IBoxContent>
        <Table striped={true} bordered={true} hover={true}>
          <thead>
            <tr>
              <th />
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button />
              </td>
              <td>123</td>
            </tr>
          </tbody>
        </Table>
      </IBoxContent>
    </IBox>
  );
};
