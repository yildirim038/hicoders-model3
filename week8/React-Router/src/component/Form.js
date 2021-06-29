import React, { useReducer } from 'react';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

export default function Forms(props) {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmitForm(formData);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          First Name
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          name='firstName'
          type='text'
          placeholder='firstName' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Last Name
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          name='lastName'
          type='text'
          placeholder='lastName' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          amount_of_work
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          type='nummer'
          name='amount_of_work'
          placeholder='amount_of_work' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          arrival_date
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          type='date'
          name='arrival_date' />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>
          Email address
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='email' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Password
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          type='password'
          name='password'
          placeholder='password' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

