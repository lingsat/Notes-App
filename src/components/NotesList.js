import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({notes, addNote, removeNote}) => {
    return (
        <div className="notes_list">
            {notes.map(note => {
                return <Note key={note.id} {...note} removeNote={removeNote}  />
            })}
            <AddNote addNote={addNote} />
        </div>

    );
}

export default NotesList;