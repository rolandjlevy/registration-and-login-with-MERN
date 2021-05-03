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

function LoginForm(props) {

  const [passwordsHidden, setPasswordsVisibility] = useState(true);
  const [formState, setFormState] = useState({});
  const [alertType, setAlertType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setuserDetails] = useState({});

  const togglePasswordVisibilty = () => {
    setPasswordsVisibility(!passwordsHidden);
  }

  const handleChange = (event) => {
    if (errorMessage.length) setErrorMessage('');
    if (loggedIn) setLoggedIn(false);
    const key = event.target.id;
    setFormState({
      ...formState,
      [key]:event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(false);
    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
    .then(res => res.json())
    .then(result => {
      const alertColor = result.error ? "danger" : "success";
      const emoji = result.error ? '⚠️ ' : '👍 ';
      setAlertType(alertColor);
      setErrorMessage(emoji + result.message);
      setLoggedIn(!result.error);
      setuserDetails(result.data);
    });
  }

  return (
    <div className="vertical-center">
      <Jumbotron fluid className="m-0 p-4 rounded w-100">
        <Container fluid>
          <Form onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username" placeholder="Username (6 - 24 characters)" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type={passwordsHidden ? "password" : "text"} name="password" id="password" placeholder="Password (6 - 24 characters)"  onChange={handleChange} />
            </FormGroup>
            <FormGroup check className="mb-3">
              <Label check>
                <Input type="checkbox" id="toggler" onClick={togglePasswordVisibilty} />{' '}Show Password
              </Label>
            </FormGroup>
            <Button type="submit" className="mt-3 mb-4">Login</Button>
          </Form>
          {errorMessage &&
          <Alert color={alertType}>
            {errorMessage}
          </Alert>}
          {loggedIn && userDetails && (
            <ul>
              <li><strong>User name</strong>: {userDetails.username}</li>
              <li><strong>Email address</strong>: {userDetails.email}</li>
              <li><strong>Registration date</strong>: {userDetails.date && new Date(Number(userDetails.date)).toISOString()}</li>
              <li><strong>Customer ID</strong>: {userDetails._id}</li>
            </ul>)}
        </Container>
      </Jumbotron>
    </div>
  );
}


export default LoginForm;