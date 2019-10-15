import React from 'react';

import NoteText from '../note-text/note-text.component';
import { NoteTags } from '../note.tags/note-tags.component';

import { Note } from '../../redux/interfaces';

import './notes-list.css';

interface Props {
  notes: Note[],
  onTagClicked?: (noteId: number) => void;
}

const NotesList: React.FC<Props> = (props: Props) => {
  const { notes } = props;

  const onTagClicked = (tag: string | null) => {
    console.log(tag);
  }

  return (
    <ul className="Notes-list">
      {notes.map((note: Note) => (
        <li key={note.text}>
          <NoteText text={note.text} onTagClicked={onTagClicked} />
          <NoteTags tags={note.tags} />
        </li>
      ))}
    </ul>
  );
}

export { NotesList };
