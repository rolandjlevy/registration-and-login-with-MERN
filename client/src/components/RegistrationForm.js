
import React, { useState } from 'react';
import { 
  Container,
  Jumbotron,
  Alert,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input
} from 'reactstrap';

function RegistrationForm(props) {

  const [passwordsHidden, setPasswordsVisibility] = useState(true);
  const [formState, setFormState] = useState({});
  const [alertType, setAlertType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibilty = () => {
    setPasswordsVisibility(!passwordsHidden);
  }

  const handleChange = (event) => {
    const key = event.target.id;
    setFormState({
      ...formState,
      [key]:event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      const alertColor = result.error ? "danger" : "success";
      setAlertType(alertColor);
      setErrorMessage(result.message);
    });
}

  return (
    <div className="m-5 vertical-center">
      <Jumbotron fluid className="p-4 rounded form-width">
        <Container fluid>
          <p className="lead font-weight-bold">Register as a new user</p>
          <Form onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username" placeholder="Username (6 - 12 characters)" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Valid email. Eg: john@gmail.com" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type={passwordsHidden ? "password" : "text"} name="password" id="password" placeholder="Password (6 - 12 characters)"  onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Confirm your password</Label>
              <Input type={passwordsHidden ? "password" : "text"} name="confirmedpassword" id="confirmedpassword" placeholder="Retype password"  onChange={handleChange}/>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Label check>
                <Input type="checkbox" id="toggler" onClick={togglePasswordVisibilty} />{' '}Show Passwords
              </Label>
            </FormGroup>
            <Button type="submit" className="mt-3 mb-3">Register now</Button>
          </Form>
          {errorMessage &&
          <Alert color={alertType}>
            {errorMessage}
          </Alert>}
        </Container>
      </Jumbotron>
    </div>
  );
}

export default RegistrationForm;