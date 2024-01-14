import React, {useState, useEffect} from 'react';
import { getInitialData } from '../utils/index'; 
import Navbar from './Navbar';
import NotesBody from './NotesBody';

interface Note {
  id: number; 
  title: string;
  createdAt: string;
  body: string;
  archived: boolean;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(getInitialData);
  }, []);

  return (
    <>
      <Navbar notes={notes} setNotes={setNotes}/>
      <NotesBody notes={notes} setNotes={setNotes}/>
    </>
  );
};

export default Notes;
