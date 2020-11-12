import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  const { contact } = props;

  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.number
  }).isRequired
};

export default (Contact);
