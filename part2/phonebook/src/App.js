import React, { useState } from 'react'

const Numbers = (props) => {
  const names = () => props.people.map(person => 
    <Name
      key={person.id}
      name={person.name}
    />
  )
  return (
    <div>
      <h2>Numbers</h2>
      {names()}
    </div>
  )
}

const Name = (props) => {
  return (
    <p>Name: {props.name}</p>
  )
}
const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      id: 0
    }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(
      newPerson));
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers people={persons}/>
    </div>
  )
}

export default App
