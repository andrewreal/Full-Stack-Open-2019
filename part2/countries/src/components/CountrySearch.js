import React from 'react';

const CountrySearch = (props) => {

  return (
    <form>
      <label>Find Countries</label>
      <input
        value={PaymentResponse.filter}
        onChange={props.handleFilterChange}
      />
    </form>
  )
}

export default CountrySearch;