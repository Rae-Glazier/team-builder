import React from 'react';
import './App.css';
import { useState } from 'react'

import TeamMembers from './TeamMembers';
import Form from './Form';

const App = () => {
  const [teams, setTeams] = useState([{
    name: '',
    email: '',
    role: ''
  }
]);

const addNewForm = form => {
  const newForm = {
    id: Date.now(),
    name: form.name,
    email: form.email,
    role: form.role
  };
  setTeams([...teams, newForm]);
};

  return (
    <div className="App">
      
      <h1>My Team</h1>
      <Form addNewForm={addNewForm} />
      <TeamMembers teams={teams} />

    </div>
  );
}

export default App;
