import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Table
} from 'react-bootstrap';
import Axios from 'axios';
import ContactList from './ContactList';
import Contact from './Contact';
import ContactFilter from './ContactFilter';

export default function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(async () => {
    const response = await Axios.get('http://hilmi.pw/contacts');
    const { data } = response;
    setContacts(data);
  }, []);

  const handleFilter = async (event) => {
    console.log('masuk bang');
    const { value } = event.target;
    console.log(contacts);
    console.log('------------');
    const filtered = await contacts.find((obj) => obj.name === value);
    console.log(filtered);
    setQuery(value);
    setFilteredContacts([filtered]);
  };

  const contactsData = query === '' ? contacts : filteredContacts;

  return (
    <Container>
      <br />
      <Row>
        <Col> </Col>
        <Col xs={6}>
          <ContactFilter handleFilter={handleFilter} />
          <br />
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Phone</th>
              </tr>
            </thead>
            <ContactList
              renderItem={(contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                />
              )}
              contacts={contactsData}
            />
          </Table>
        </Col>
        <Col> </Col>
      </Row>
    </Container>
  );
}
