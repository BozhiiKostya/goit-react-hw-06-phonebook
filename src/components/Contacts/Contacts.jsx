import { removeContact } from 'redux/reducer/contactsSlice';
import {
  StyledButton,
  StyledItem,
  StyledList,
  StyledText,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filters.value);
  const dispatch = useDispatch();

  const getFilteredContactsList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = cardId => {
    dispatch(removeContact(cardId));
  };

  return (
    <StyledList>
      {getFilteredContactsList().map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <StyledText>{name + ': ' + number}</StyledText>
            <StyledButton onClick={() => deleteContact(id)}>
              Delete
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
