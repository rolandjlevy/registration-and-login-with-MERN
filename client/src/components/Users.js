import React, { Fragment, useState, useEffect, useCallback } from 'react';

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Users() {
  const [userList, setUserList] = useState([]);

  const getUsersList = () => {
    return new Promise((resolve, reject) => {
      fetch('/users')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  const loadUsers = useCallback(() => {
    getUsersList().then(result => {
      if (result) {
        setUserList(result);
      }
    });
  }, [setUserList]);

  const getUser = (id) => {
    fetch(`/user/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => error);
  }

  // <h1>View user details</h1>
  // <p>Username: ${user.username}</p>
  // <p>Email: ${user.email}</p>
  // <p>Date registered: ${new Date(Number(user.date)).toISOString()}</p>
  // <p>ID: ${user._id}</p>

  return (
    <Container>
      <Button 
        onClick={loadUsers} 
        color="light"
      >Load users</Button>
      <ListGroup>
      {(userList.length && userList.map(user => {
        return <ListGroupItem 
                key={user._id}>
                  {user.username}
                  <Button onClick={() => { getUser(user._id)}}>&times;</Button>
                </ListGroupItem>
      })) || 'No users found'}
      </ListGroup>
    </Container>
  );
}

export default Users;