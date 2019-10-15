import React from 'react';
import { connect } from 'react-redux'

import { NotesList } from './components/notes-list/notes-list.component';

import { State, Note } from './redux/interfaces';

import './App.css';

interface AppProps {
  notes: Note[]
}

const mapStateToProps = (state: State) => ({
  notes: state.notes,
  filter: state.filter
});

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
        <NotesList notes={props.notes} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default connect(mapStateToProps)(App);
