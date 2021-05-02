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
      fetch('/userlist')
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

  return (
    <Container>
      <Button onClick={loadUsers}>Load users</Button>
      <ListGroup>
      {(userList.length && userList.map(user => {
        return <ListGroupItem key={user._id}>{user.username}</ListGroupItem>
      })) || 'No users found'}
      </ListGroup>
    </Container>
  );
}

export default Users;