import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Table
} from 'react-bootstrap';
import Axios from 'axios';
import ContactList from './ContactList';
import Contact from './Contact';

export default function ContactPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    const response = await Axios.get('http://hilmi.pw/contacts');
    const { data } = response;
    setContacts(data);
  }, []);
  return (
    <Container>
      <br />
      <Row>
        <Col> </Col>
        <Col xs={6}>
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
              contacts={contacts}
            />
          </Table>
        </Col>
        <Col> </Col>
      </Row>
    </Container>
  );
}
