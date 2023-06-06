import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    const filterValue = event.currentTarget.value;
    dispatch(setFilter(filterValue));
  };
  return (
    <label htmlFor="filter" className={css.filter_label}>
      Find contact by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilterChange}
        className={css.filter}
      />
    </label>
  );
};

export default Filter;
