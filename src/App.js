import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

const initialFormValues ={
  name:'',
  email:'',
  role:'',
};

function App() {
  // Stored values of incoming info
  const [savedInfo, setSavedInfo] = useState([]);
  //values of the form
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) =>{
    setFormValues({ ...formValues, [inputName]: inputValue });
  } 
    

  return (
    <div className="App">
      <header className="App-header">
        <Form formValues={formValues} updateForm={updateForm}/>
      </header>
    </div>
  );
}

export default App;
