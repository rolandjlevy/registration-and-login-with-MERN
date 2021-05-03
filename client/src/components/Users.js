import React, { useState, useCallback } from 'react';

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

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
        console.log({result});
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

  return (
    <Container>
      <Button 
        onClick={loadUsers} 
        color="light"
      >Load users</Button>
      <ListGroup>
      {(userList && userList.data && userList.data.map(user => {
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