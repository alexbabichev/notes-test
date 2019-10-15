// intefaces

export enum ActionsTypes {
  ADD_NOTE = 'ADD_NOTE',
  FILTER_NOTES = 'FILTER_NOTES',
  FILTER_CLEAR = 'FILTER_CLEAR'
}

export interface Note {
  id: number;
  text: string;
  tags: string[];
}

export interface AddNoteAction {
  type: ActionsTypes.ADD_NOTE,
  payload: Note
}

export interface FilterNotes {
  type: ActionsTypes.FILTER_NOTES,
  payload: string
}

export interface FilterClear {
  type: ActionsTypes.FILTER_CLEAR
}

export type Action = AddNoteAction | FilterNotes | FilterClear;

// State

export interface State {
  notes: Note[],
  filter: string | null
}