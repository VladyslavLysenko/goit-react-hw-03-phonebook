import React from 'react';
import PropTypes from 'prop-types';
import {ContactBtn} from './Contacts.styled';
export const ContactItem = ({ contact: { id, name, number }, handlerDelete }) => {
  return (
    <>
      <span>
        {name}:{number}
      </span>
      <ContactBtn type="button" onClick={() => handlerDelete(id)}>
        Delete
      </ContactBtn>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
