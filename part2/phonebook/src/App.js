import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers';
import Filter from './components/Filter';
import Form from './components/Form';
import phoneService from './services/phoneService'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
  const [ filter, setFilter ] = useState('');
  
  useEffect(() => {
    phoneService
      .getAll() 
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
    phoneService
      .create(newPerson)
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

  const deleteNumberOf = id => {
    if (window.confirm(`Are you sure you want to delete?`)) {
      phoneService
        .delete(id)
        .then(response => {
            response.status === 200
              ? setPersons(persons.filter(person => person.id !== id))
              : console.log('Error', response);
              
        })
    }
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
        deleteNumber={(id) => deleteNumberOf(id)}
      />
    </div>
  )
}

export default App
