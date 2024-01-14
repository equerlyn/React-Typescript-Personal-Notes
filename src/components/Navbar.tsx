import React, { useState, useEffect, FC } from 'react';
import { getInitialData } from '../utils/index'; 

interface Note {
  id: number; 
  title: string;
  createdAt: string;
  body: string;
  archived: boolean;
}

interface NavbarProps {
  notes: Array<Note>;
  setNotes: (notes: Array<Note>) => void;
}

const Navbar: FC<NavbarProps> = ({ notes, setNotes }) => {
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');

  useEffect(() => {
    const lowerCaseSearch = search.toLowerCase();
    const isBackspacePressed = lowerCaseSearch.length < prevSearch.length;

    if (isBackspacePressed) {
      const initialData = getInitialData(); 
      setNotes(initialData);
    } else {
      const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(lowerCaseSearch);
      });
      setNotes(filteredNotes);
    }

    // Update the previous search value
    setPrevSearch(lowerCaseSearch);
  }, [search, notes, setNotes, prevSearch]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  
  return (
    <div className="note-app__header note-search">
      <h1>Notes</h1>
      <input type="text" placeholder="Cari catatan ..." onChange={searchHandler} value={search}/>
    </div>
  );
};

export default Navbar;
