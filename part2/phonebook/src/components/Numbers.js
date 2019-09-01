import React from 'react';
import Name from './Name';

const Numbers = (props) => {
  const names = () => props.people.map(person => 
    <Name
      key={person.id}
      name={person.name}
      phone={person.phone}
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