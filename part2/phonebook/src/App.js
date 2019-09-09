import React, { useState } from 'react'
import Numbers from './components/Numbers';
import Filter from './components/Filter';
import Name from './components/Name';
import Form from './components/Form';

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '012345',
      id: 0
    },
    { 
      name: 'Linus Torvalds',
      phone: '0987654321',
      id: 1
    },
    { 
      name: 'Linus Techtips',
      phone: '07777777777',
      id: 2
    },
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ filter, setFilter ] = useState('');
  
  const peopleToShow = (filter.length >= 0)
        ? persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLowerCase()))
        : persons

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }
    
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <Form
        formHandler={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      {/* <form onSubmit={addName}>
        <div>
          Name: <input 
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          Phone: <input 
            value={newPhone}
            onChange={handlePhoneChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <Numbers 
        peopleToShow={peopleToShow}
      />
    </div>
  )
}

export default App
