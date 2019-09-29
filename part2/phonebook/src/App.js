import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers';
import Filter from './components/Filter';
import Form from './components/Form';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ filter, setFilter ] = useState('');
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [] )
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
      number: newPhone,
    }
    const url = `http://localhost:3001/persons/`
    axios.post(url, newPerson)
      .then (response => {
        setPersons(persons.concat(response.data));
      })

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
      <Numbers 
        peopleToShow={peopleToShow}
      />
    </div>
  )
}

export default App
