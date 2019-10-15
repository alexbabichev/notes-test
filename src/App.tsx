import React from 'react';
import { connect } from 'react-redux';

import { AppHeader } from './components/app-header/app-header.component';
import { NotesList } from './components/notes-list/notes-list.component';
import { NotesAdd } from './components/notes-add/notes-add.component';

import { addNote, filterClear } from './redux/actions';
import { State, Note, AddNoteAction, FilterClearAction } from './redux/interfaces';

import './App.css';

interface AppProps {
  notes: Note[];
  filter: string | null;
  onAddNote: (text: string) => AddNoteAction;
  onClearFilter: () => FilterClearAction;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const notes = !props.filter
    ? props.notes
    : props.notes.filter(note => {
      return note.tags.includes(props.filter || '');
    });

  return (
    <section className="App">
      <AppHeader 
        filter={props.filter}
        filteredNotesLenght={notes.length}
        allNotesLength={props.notes.length}
        onFilterClear={props.onClearFilter}
      />
      
      <NotesAdd onNoteSubmit={props.onAddNote} />
      
      <NotesList notes={notes} />
    </section>
  );
}

const mapStateToProps = (state: State) => ({ ...state });
const mapDispatchToProps = {
  onAddNote: addNote,
  onClearFilter: filterClear
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
