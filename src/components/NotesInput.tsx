import React, { useState } from 'react';

interface Note {
  id: number; 
  title: string;
  createdAt: string;
  body: string;
  archived: boolean;
}

interface NotesInputProps {
  title: string;
  content: string; 
  setContent: (content: string) => void;
  setTitle: (title: string) => void;
  notes: Array<Note>;
  setNotes: (notes: Array<Note>) => void;
}


const NotesInput: React.FC<NotesInputProps> = ({ title, setTitle, content, setContent, notes, setNotes }) => {
  const [charLimit, setCharLimit] = useState(50);

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = e.target.value;
    if (inputTitle.length <= 50) {
      setTitle(inputTitle);
      setCharLimit(50 - inputTitle.length);
    }
  };

  const createNoteHandler = () => {
    const newNote: Note = {
      id: notes.length + 1, 
      title: title,
      createdAt: new Date().toISOString(), 
      body: content,
      archived: false,
    };

    setNotes([...notes, newNote]);
  };

  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <p className='note-input__title__char-limit'>Sisa karakter: {charLimit}</p>
      <input
        type="text"
        name="title"
        id="title"
        placeholder='Ini adalah judul ...'
        onChange={titleHandler}
        value={title}
      />
      <textarea
        name="content"
        id="content"
        cols={30}
        rows={10}
        placeholder='Tuliskan catatanmu di sini...'
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <button type="submit" onClick={createNoteHandler}>
        Buat
      </button>
    </div>
  );
}

export default NotesInput;
