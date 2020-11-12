import React from 'react';
import PropTypes from 'prop-types';

function ContactList(props) {
  const { contacts, renderItem } = props;
  return (
    <tbody>
      {contacts.map((contact) => (
        renderItem(contact)
      ))}
    </tbody>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.number
  }).isRequired)
    .isRequired,
  renderItem: PropTypes.func.isRequired
};

export default ContactList;
