import { useDispatch, useSelector } from 'react-redux';
import { StyledInput, Styledlabel } from './Filter.styled';
import { filterContact } from 'redux/reducer/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filters.value);
  const dispatch = useDispatch();

  const filterContacts = value => {
    dispatch(filterContact(value));
  };

  return (
    <Styledlabel>
      Find contacts by name
      <StyledInput
        onChange={e => filterContacts(e.currentTarget.value)}
        name="filter"
        placeholder="Filter..."
        value={filter}
      />
    </Styledlabel>
  );
};
