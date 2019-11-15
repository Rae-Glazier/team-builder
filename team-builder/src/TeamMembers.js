import React from 'react';
import { useState } from 'react';

//create list of team members
//assign key/value pairs to team members
//create useState

const TeamMembers = props => {
    const [team, setTeam] = useState({name: '', email: '', role:''});

    const handleChanges = e => {
        setTeam({...team, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewForm(team);
        setTeam({name: '', email: '', role:''});
    };

    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={team.name}
            />
        </form>
    )
}

export default TeamMembers;