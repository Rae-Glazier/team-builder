import React from 'react';

const Form = props => {
    // console.log(props.teams);

    return (
        <div className='team-list'>
            {props.teams.map(form => (
                console.log(form.name)
                // <div className='form' key={form.id}>
                //     <h2>{form.name}</h2>
                //     <p>{form.email}</p>
                //     <p>{form.role}</p>
                // </div>
            ))}
        </div>
    );
};

export default Form;
  