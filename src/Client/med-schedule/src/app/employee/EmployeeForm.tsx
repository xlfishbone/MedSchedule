import React, {Component} from 'react';
import {IBox} from '../layout/ibox/IBox';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {Employee} from '../core/entities';
import {IBoxHeader} from '../layout/ibox/Ibox.Header';
import {IBoxContent} from '../layout/ibox/IBox.Content';

export interface EmployeeFormProps {
  employeeId: number;
}

export interface EmployeeFormState {
  curEmployee: Employee;
}

export class EmployeeForm extends Component<EmployeeFormProps, EmployeeFormState> {
  state: EmployeeFormState = {
    // tslint:disable-next-line:no-object-literal-type-assertion
    curEmployee: {} as Employee,
  };

  async getEmployee(): Promise<Employee> {
    try {
      const resp = await axios.get<Employee>(`/api/Employee/${this.props.employeeId}`);
      return resp.data;
    } catch (error) {
      throw error;
    }
  }

  async saveEmployee(): Promise<Employee> {
    // call the db here and save the employee
    const response = await axios.post<Employee>('/api/Employee', this.state.curEmployee);
    return response.data;
  }

  render() {
    return (
      <IBox>
        <IBoxHeader title="Employee Form" />
        <IBoxContent>
          <Form>
            <Form.Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.curEmployee.email} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Button variant="primary" type="submit" onClick={this.saveEmployee}>
                Submit
              </Button>
            </Form.Row>
          </Form>
        </IBoxContent>
      </IBox>
    );
  }
}
