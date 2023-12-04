import React from 'react';


export default function NotesCom(props) {
    return <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.noteContent}</p>
    </div>;
};
