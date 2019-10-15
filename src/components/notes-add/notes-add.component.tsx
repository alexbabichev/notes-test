import React from 'react';

import './notes-add.css';

interface Props {
  onNoteSubmit: (text: string) => void;
}

const NotesAdd: React.FC<Props> = (props: Props) => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const text = data.get('text');

    text && props.onNoteSubmit(text as string);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="Notes-add-form">
      <input type="text" name="text" placeholder="Note text" />
      <button type="reset">×</button>
      <p className="dimmed">
        <small>Use [enter] to submit note</small>
      </p>
    </form>
  );
}

export { NotesAdd };
