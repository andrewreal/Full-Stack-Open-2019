import React from 'react';
import Name from './Name';

const Numbers = (props) => {
  console.log(props.peopleToShow);
  
  const names = () => props.peopleToShow.map( person => 
    <Name
      key={person.id}
      name={person.name}
      phone={person.number}
    />
  )

  return (
    <div>
      <h2>Numbers</h2>
      {names()}
    </div>
  )
}

export default Numbers;