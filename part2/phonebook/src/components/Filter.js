import React from 'react';

const Filter = (props) => {
  return (
    <p>
      <label>Filter shown with </label>
      <input
        value={props.filter}
        onChange={props.handleFilterChange}
      />
    </p>
  )
}


export default Filter;