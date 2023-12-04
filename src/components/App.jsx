import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer';
import NotesCom from './Note';
import notes from '../notes.js';

export default function App() {

    return <div>
        <Header />
        {/* Using arrow func to make it look shorter */}
        {notes.map(
            (newNote) =>
                <NotesCom
                    key={newNote.key}
                    title={newNote.title}
                    noteContent={newNote.content}
                />
        )}
        <Footer />
    </div>;
};

