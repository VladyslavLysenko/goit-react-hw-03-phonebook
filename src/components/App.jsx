import React from 'react';
import ContactForm from './Form/Form';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';

import { GlobalStyle } from '../GlobalStyle';
import { CommonBox } from './Form/Form.styled';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  saveContact = contact => {
    const contacts = this.state.contacts;
    const checkName = contacts
      .map(item => item.name.toLowerCase())
      .some(item => item === contact.name.toLowerCase());

    if (checkName) {
      window.alert(contact.name);
      return false;
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        ],
      }));
      return true;
    }
  };

  saveFilter = filterValue => {
    this.setState(prevState => ({
      filter: filterValue,
    }));
  };

  deleteContact = key => {
    console.log('work', key);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== key),
    }));
  };

  render() {
    const filterValue = this.state.filter.toLowerCase();
    const contacts = this.state.contacts;
    const filtredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filterValue)
    );

    return (
      <div>
        <CommonBox>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.saveContact} />
          </Section>
        </CommonBox>
        <CommonBox>
          <Section title="Contacts">
            <Filter value={this.state.filter} onChange={this.saveFilter} />

            <Contacts
              handlerDelete={this.deleteContact}
              contacts={filtredContacts}
            />
          </Section>
        </CommonBox>
        <GlobalStyle />
      </div>
    );
  }
}
