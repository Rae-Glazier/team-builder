import React from 'react';

const Form = props => {
    return (
        <div className='team-list'>
            {props.notes.map(form => (
                <div className='form' key={form.id}>
                    <h2>{form.title}</h2>
                    <p>{form.body}</p>
                </div>
            ))}
        </div>
    )
}
  