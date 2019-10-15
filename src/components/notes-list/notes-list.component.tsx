import React from 'react';

import { NoteText } from '../note-text/note-text.component';
import { NoteTags } from '../note.tags/note-tags.component';

import { Note } from '../../redux/interfaces';

import './notes-list.css';

interface Props {
  notes: Note[],
  onTagClicked: (tag: string) => void;
}

const NotesList: React.FC<Props> = (props: Props) => {
  return (
    <ul className="Notes-list">
      {props.notes.map((note: Note) => (
        <li key={note.text}>
          <NoteText text={note.text} onTagClicked={props.onTagClicked} />
          <NoteTags tags={note.tags} onTagClicked={props.onTagClicked} />
        </li>
      ))}
    </ul>
  );
}

export { NotesList };
