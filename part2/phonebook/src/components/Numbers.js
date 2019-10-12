import React from 'react';
import Name from './Name';

const Numbers = (props) => {
    
  const deleteNumber = (id) => {props.deleteNumber(id)} 
  
  const names = () => props.peopleToShow.map( person => 
    <div
    key={person.id}
    >
      <Name
        key={person.id}
        name={person.name}
        phone={person.number}
      />
      <button
        onClick={() => deleteNumber(person.id)}
        // onClick={deleteNumber}
      >Delete
      </button>
    </div>
  )

  return (
    <div>
      <h2>Numbers</h2>
      {names()}
    </div>
  )
}

export default Numbers;