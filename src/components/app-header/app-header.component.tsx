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
      
      <p >
        {!!props.filter
          ? (
            <span>
              <small className="dimmed">Selected Tag: </small> 
              <small>{props.filter}</small>
              <small className="Clear-filter dimmed" onClick={props.onFilterClear}> [clear] </small>
            </span>
          )
          : (
            <small className="dimmed">No selected tags</small>
          )}
      </p>
    </header>
  );
}

export { AppHeader };
