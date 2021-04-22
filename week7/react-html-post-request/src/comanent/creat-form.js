import React, {useState} from 'react'
import { Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './form.css'
export default function FormCreat (){
  /**
   * Olusutulan listeler;
   */
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState();
    const [birthday, setBirthday] = useState();
    const [about, setAbout] = useState();
/**
 * Butona basinca Post u gönderen fonksiyon
 * @param {*} e 
 */
    function submit(e) {
        e.preventDefault();
        function postRequest() {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                birthday: birthday,
                email: email,
                password: password,
                about: about,
              }),
            };
      
            fetch("http://174.138.103.233/api/employees",requestOptions)
            .then((response) => response.json());
          }
          postRequest();;
      }

  return(
  <div className="container" title="containerinfo">
  <Form onSubmit={submit}>
    <Form.Group>
      <Form.Label>First Name</Form.Label>
      <Form.Control
        onChange={(e) => setFirstName(e.target.value)}
        type="name"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        type="Lastname"
      />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
    </Form.Group>
    <Form.Group controlId="formBasicGender">
      <Form.Label>Gender</Form.Label>
      <Form.Control
        onChange={(e) => setGender(e.target.value)}
        type="text"
      />
    </Form.Group>
    <Form.Group controlId="formBasicBirthday">
      <Form.Label>Birthday</Form.Label>
      <Form.Control
        onChange={(e) => setBirthday(e.target.value)}
        type="date"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>About</Form.Label>
      <Form.Control
        onChange={(e) => setAbout(e.target.value)}
        as="textarea"
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</div>)
}