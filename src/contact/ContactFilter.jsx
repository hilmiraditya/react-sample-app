import { Form } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

export default function ContactFilter(props) {
  const { handleFilter } = props;
  return (
    <Form.Control
      type="text"
      placeholder="Search ..."
      id="filter-name"
      onChange={handleFilter}
    />
  );
}

ContactFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired
};
