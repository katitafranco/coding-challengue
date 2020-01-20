import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Search.scss';

function SelectSearch({ options, valueSelected, handleChange }) {
  return (
    <select
      className="search_select"
      value={valueSelected}
      onChange={handleChange}
    >
      {/* <option value="TODAS">TODAS</option> */}
      {options.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

SelectSearch.propTypes = {
  options: PropTypes.array.isRequired,
  valueSelected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SelectSearch;
