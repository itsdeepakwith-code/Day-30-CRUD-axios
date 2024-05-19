import React from 'react';
import { Table, Button } from 'react-bootstrap';

function UserList({ users, onDeleteUser, onEditUser, onViewUser }) {
  return (
    <Table striped bordered hover responsive className="user-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onEditUser(user)}
                className="me-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDeleteUser(user.id)}
                className="me-2"
              >
                Delete
              </Button>
              <Button
                variant="info"
                size="sm"
                onClick={() => onViewUser(user)}
              >
                View
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;
