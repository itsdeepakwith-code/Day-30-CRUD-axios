import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function UserForm({ onAddUser, user = {} }) {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [username, setUsername] = useState(user.username || '');
  const [address, setAddress] = useState(user.address || {});
  const [phone, setPhone] = useState(user.phone || '');
  const [website, setWebsite] = useState(user.website || '');
  const [company, setCompany] = useState(user.company || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      username,
      address,
      phone,
      website,
      company,
    };
    onAddUser(newUser);
    setName('');
    setEmail('');
    setUsername('');
    setAddress({});
    setPhone('');
    setWebsite('');
    setCompany({});
  };

  const handleAddressChange = (e) => {
    const updatedAddress = { ...address };
    updatedAddress[e.target.name] = e.target.value;
    setAddress(updatedAddress);
  };

  const handleCompanyChange = (e) => {
    const updatedCompany = { ...company };
    updatedCompany[e.target.name] = e.target.value;
    setCompany(updatedCompany);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <h4>Address</h4>
      <Form.Group className="mb-3">
        <Form.Label>Street</Form.Label>
        <Form.Control
          type="text"
          name="street"
          value={address.street || ''}
          onChange={handleAddressChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Suite</Form.Label>
        <Form.Control
          type="text"
          name="suite"
          value={address.suite || ''}
          onChange={handleAddressChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={address.city || ''}
          onChange={handleAddressChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zipcode</Form.Label>
        <Form.Control
          type="text"
          name="zipcode"
          value={address.zipcode || ''}
          onChange={handleAddressChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </Form.Group>

      <h4>Company</h4>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={company.name || ''}
          onChange={handleCompanyChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Catch Phrase</Form.Label>
        <Form.Control
          type="text"
          name="catchPhrase"
          value={company.catchPhrase || ''}
          onChange={handleCompanyChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>BS</Form.Label>
        <Form.Control
          type="text"
          name="bs"
          value={company.bs || ''}
          onChange={handleCompanyChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {user.id ? 'Update User' : 'Add User'}
      </Button>
    </Form>
  );
}

export default UserForm;
