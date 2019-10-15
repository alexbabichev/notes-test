import React from 'react';
import { Note } from '../../redux/interfaces';

interface Props {
  notes: Note[],
  onTodoClicked?: (todoId: number) => void
}
interface State { }

const NotesList: React.FC<Props> = (props: Props) => {
  const { notes } = props;
  console.log(props);
  return (
    <div>
      <ul>
        {notes.map((note: Note) => (
          <li key={note.text}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}

export { NotesList };
