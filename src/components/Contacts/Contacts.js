import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { InnerWrap } from '../Form/Form.styled';
import { ContactList, Item } from './Contacts.styled';
export const Contacts = ({ contacts, handlerDelete }) => (
  <InnerWrap>
    <ContactList>
      {contacts.map(item => (
        <Item key={item.id}>
          <ContactItem contact={item} handlerDelete={handlerDelete} />
        </Item>
      ))}
    </ContactList>
  </InnerWrap>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  handlerDelete: PropTypes.func,
};
