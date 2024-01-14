  import React, { FC } from 'react';
  import NoteItem from './NoteItem'; 

  interface Note {
    id: number;
    title: string;
    createdAt: string;
    body: string;
    archived: boolean;
  }

  interface NotesListProps {
    type: string;
    notes: Array<Note>;
    setNotes: (notes: Array<Note>) => void;
  }

  const NotesList: FC<NotesListProps> = ({ notes, type, setNotes }) => {
    let shouldShowArchived = false
    if(type === 'Arsip'){
      shouldShowArchived = true
    }
    const filteredNotes = notes.filter((note) => note.archived === shouldShowArchived);
  
    return (
      <>
        <h2>{type}</h2>
        {filteredNotes.length === 0 && <p className='notes-list__empty-message'>Tidak ada catatan</p>}
        <div className='notes-list'>
          {filteredNotes.map((note) => (
            <NoteItem key={note.id} title={note.title} date={note.createdAt} content={note.body} type={type} notes={notes} setNotes={setNotes}/>
          ))}
        </div>
      </>
    );
  };

  export default NotesList;
