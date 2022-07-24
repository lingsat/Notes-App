import { useState } from 'react';

const AddNote = ({addNote}) => {
    const [symbolsLimit, setSymbolsLimit] = useState(200);
    const [noteText, setNoteText] = useState('');

    const handleChange = (e) => {
        if (symbolsLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);  
        }
    }
    const handleSave = () => {
        if (noteText.trim().length > 0) {
            addNote(noteText);   
        }
        setNoteText('');  
    }

    return (
        <div className="note note--new">
            <textarea 
                rows={8} 
                cols={10} 
                autoFocus={true}
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note__footer">
                <span className="note__data">{symbolsLimit - noteText.length} Remaning</span>
                <button className='btn' onClick={handleSave}>Save</button>
            </div>
        </div>

    );
}

export default AddNote;