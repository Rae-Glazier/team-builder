import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './TeamMembers';
import Form from './Form';
import { useState } from 'react'

function App() {
  const [teams, setTeams] = useState([{
    id: 1,
    name: 'Rae Glazier',
    email: 'glazier.home.life@gmail.com',
    role: 'Junior Web Dev'
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>My Team</h1>
      <Form addNewForm={addNewForm} />
      <TeamMembers teams={teams} />
    </div>
  );
}

export default App;
