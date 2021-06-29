import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './component/Form'
import List from './component/List'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [list, setList] = useState([]);

  function readPersonListFromBackend() {
    fetch('http://localhost:3000/persons')
      .then(response => response.json())
      .then(data => setList(data));
  }

  function handleFormSubmit(formData) {
    fetch("http://localhost:3000/persons", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(() => readPersonListFromBackend())
      .catch(error => console.log(error));
  }

  useEffect(() => {
    readPersonListFromBackend();
  }, []);

  return (
    <div>
      <Router>
        <Nav>
          <Nav.Item className='navbar'>
            <Nav.Link>
              <Link className='link' to='/'> Get List</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='link' to='/userForm'> New Person Create</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route exact path='/userForm'>
            <Form data-testid="form-container" onSubmitForm={handleFormSubmit} />
          </Route>
          <Route path='/'>
            <List data-testid="list-container" list={list} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
