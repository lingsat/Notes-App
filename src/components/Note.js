import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, text, date, removeNote}) => {
    return (
        <div className="note">
            <p className='note__text'>{text}</p>
            <div className="note__footer">
                <span className="note__date">{date}</span>
                <MdDeleteForever className='delete__icon' onClick={() => removeNote(id)} />
            </div>
        </div>

    );
}

export default Note;