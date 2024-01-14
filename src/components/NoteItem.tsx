import React from 'react';

interface Note {
  id: number; 
  title: string;
  createdAt: string;
  body: string;
  archived: boolean;
}

interface NoteItemProps {
  title: string;
  date: string;
  content: string;
  type: string;
  notes: Array<Note>;
  setNotes: (notes: Array<Note>) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ title, date, content, type, notes, setNotes }) => {
  const dateObject = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = dateObject.toLocaleDateString('id-ID', options);

  const deleteHandler = () => {
    const updatedNotes = notes.filter((note) => note.title !== title);
    setNotes(updatedNotes);
  };

  const archiveHandler = () => {  
    const updatedNotes = notes.map((note) => {
      if (note.title === title) {
        return {
          ...note,
          archived: type === 'Catatan Aktif',
        };
      }
      return note;
    });

    setNotes(updatedNotes);
  };

  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{formattedDate}</p>
        <p className='note-item__body'>{content}</p>
      </div>
      <div className='note-item__action'>
        <button className='note-item__delete-button' onClick={deleteHandler}>Delete</button>
        {
          type === 'Catatan Aktif' ?
          <button className='note-item__archive-button' onClick={archiveHandler}>Arsipkan</button> : 
          <button className='note-item__archive-button' onClick={archiveHandler}>Pindahkan</button>
        }
      </div>
    </div>
  );
};

export default NoteItem;
