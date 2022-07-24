import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
    const [searchText, setSearchText] = useState('');
    const [lightTheme, setLightTheme] = useState(true);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        const dateNow = new Date();
        setNotes(prevNotes => {
            return [
                ...prevNotes,
                {
                    id: nanoid(),
                    text: text,
                    date: dateNow.toLocaleDateString()
                }
            ];
        }) 
    }

    const removeNote = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    return (
        <div className={`wrapper ${lightTheme ? '' : 'dark-mode'}`}>
            <div className="container">
                <Header toggleThemeMode={setLightTheme} theme={lightTheme} />
                <Search handleSearchNote={setSearchText} />
                <NotesList 
                    notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} 
                    addNote={addNote} 
                    removeNote={removeNote} 
                />
            </div>
        </div>
    );
}

export default App;