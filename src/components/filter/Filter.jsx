import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    const filterValue = event.currentTarget.value.toLowerCase();
    dispatch(setFilter(filterValue));
  };
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;
