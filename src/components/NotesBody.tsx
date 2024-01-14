import React, {useState} from 'react'; 
import NotesInput from './NotesInput';
import NotesList from './NotesList';

interface Note {
  id: number; 
  title: string;
  createdAt: string;
  body: string;
  archived: boolean;
}

interface NotesBodyProps {
  notes: Array<Note>;
  setNotes: (notes: Array<Note>) => void;
}

const NotesBody: React.FC<NotesBodyProps> = ({ notes, setNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <div className='note-app__body'>
      <NotesInput title={title} content={content} setContent={setContent} setTitle={setTitle} notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes} type='Catatan Aktif' setNotes={setNotes}/>
      <NotesList notes={notes} type='Arsip' setNotes={setNotes}/>
    </div>
  );
}

export default NotesBody;
