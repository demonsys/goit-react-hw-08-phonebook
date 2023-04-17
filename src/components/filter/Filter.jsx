import PropTypes from 'prop-types';
const Filter = ({ currentValue, onChange }) => {
  const onFilterChange = event => {
    onChange(event.currentTarget.value.toLowerCase());
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
        value={currentValue}
        onChange={onFilterChange}
      />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentValue: PropTypes.string.isRequired,
};
export default Filter;
