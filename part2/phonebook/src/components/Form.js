import React from 'react';

const Form = (props) => {

  return (
    <form onSubmit={props.formHandler}>
      <div>
        Name: <input 
          value={props.newName}
          onChange={props.handleNameChange}
          />
      </div>
      <div>
        Phone: <input 
          value={props.newPhone}
          onChange={props.handlePhoneChange}
          />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form;