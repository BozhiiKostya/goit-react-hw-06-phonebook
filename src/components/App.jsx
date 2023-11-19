import { useDispatch, useSelector } from 'react-redux';
import { createContact, removeContact } from 'redux/reducer/contactsSlice';
import { filterContact } from 'redux/reducer/filterSlice';
import { Layout } from './Layout.styled';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filters.value);
  const dispatch = useDispatch();

  const addContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(createContact(newContact));
  };

  const getFilteredContactsList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterContacts = value => {
    dispatch(filterContact(value));
  };

  const deleteContact = cardId => {
    dispatch(removeContact(cardId));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter onFilter={filterContacts} filter={filter} />
      <Contacts contacts={getFilteredContactsList()} onDelete={deleteContact} />
    </Layout>
  );
};
