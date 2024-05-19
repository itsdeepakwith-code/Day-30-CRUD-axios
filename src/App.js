import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button, Modal } from 'react-bootstrap';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetailsModal from './components/UserDetailsModal';

function App() {
  const [users, setUsers] = useState([]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showViewUserModal, setShowViewUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    };
    fetchData();
  }, []);

  const addUser = async (user) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      user
    );
    setUsers([...users, response.data]);
    setShowAddUserModal(false);
  };

  const editUser = async (updatedUser) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
      updatedUser
    );
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? response.data : user))
    );
    setShowEditUserModal(false);
    setSelectedUser({});
  };

  const deleteUser = async (userId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleOpenAddUserModal = () => setShowAddUserModal(true);
  const handleCloseAddUserModal = () => setShowAddUserModal(false);

  const handleOpenEditUserModal = (user) => {
    setSelectedUser(user);
    setShowEditUserModal(true);
  };

  const handleCloseEditUserModal = () => {
    setSelectedUser({});
    setShowEditUserModal(false);
  };

  const handleOpenViewUserModal = (user) => {
    setSelectedUser(user);
    setShowViewUserModal(true);
  };

  const handleCloseViewUserModal = () => {
    setSelectedUser({});
    setShowViewUserModal(false);
  };

  return (
    <Container>
      <h1 className="mt-4">JSONPlaceholder CRUD App</h1>
      <Button variant="primary" className="mt-4" onClick={handleOpenAddUserModal}>
        Add User
      </Button>
      <UserList
        users={users}
        onDeleteUser={deleteUser}
        onEditUser={handleOpenEditUserModal}
        onViewUser={handleOpenViewUserModal}
      />

      <Modal show={showAddUserModal} onHide={handleCloseAddUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm onAddUser={addUser} />
        </Modal.Body>
      </Modal>

      <Modal show={showEditUserModal} onHide={handleCloseEditUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm user={selectedUser} onAddUser={editUser} />
        </Modal.Body>
      </Modal>

      <UserDetailsModal
        user={selectedUser}
        show={showViewUserModal}
        onHide={handleCloseViewUserModal}
      />
    </Container>
  );
}

export default App;
