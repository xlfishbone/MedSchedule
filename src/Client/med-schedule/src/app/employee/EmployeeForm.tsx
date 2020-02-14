import React, {Component} from 'react';
import {Widget} from '../layout/Widget';
import {Form, Button} from 'react-bootstrap';

export interface EmployeeFormProps {

}

export interface EmployeeFormState {
  count: number;
}

export class EmployeeForm extends Component<EmployeeFormProps, EmployeeFormState> {
  // optional second annotation for better type inference
  state: EmployeeFormState = {
    count: 0,
  };

  saveEmployee(): void {}

  render() {
    return (
      <Widget>
        <Form>
          <Form.Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
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
      </Widget>
    );
  }
}
