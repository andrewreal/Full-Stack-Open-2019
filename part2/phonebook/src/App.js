import React, { useState } from 'react'
import Numbers from './components/Numbers';

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '012345',
      id: 0
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const foundPerson = persons.filter(person => (person.name === newName));    
    if (foundPerson.length > 0){
      alert(`${newName} is already added to the phonebook.`);
      return;
    }
    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    }
    setPersons(persons.concat(
      newPerson));
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
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
          phone: <input 
            value={newPhone}
            onChange={handlePhoneChange}
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
