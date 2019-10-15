import React from 'react';

import './app-header.css';

interface Props {
  filter: string | null;
  filteredNotesLenght: number;
  allNotesLength: number;
  onFilterClear: () => void;
}

const AppHeader: React.FC<Props> = (props: Props) => {
  return (
    <header className="App-header">
      <h1>Notes App</h1>

      <p className="dimmed">
        <span>Viewed Notes: {props.filteredNotesLenght} of {props.allNotesLength}</span>
      </p>
      
      <p className="dimmed">
        {!!props.filter
          ? (
            <span>
              <small>Selected Tag: {props.filter}</small>
              <small className="Clear-filter dimmed" onClick={props.onFilterClear}> [clear] </small>
            </span>
          )
          : (
            <small>No selected tags</small>
          )}
      </p>
    </header>
  );
}

export { AppHeader };
