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

export interface FilterNotesAction {
  type: ActionsTypes.FILTER_NOTES,
  payload: string
}

export interface FilterClearAction {
  type: ActionsTypes.FILTER_CLEAR
}

export type Action = AddNoteAction | FilterNotesAction | FilterClearAction;

// State

export interface State {
  notes: Note[],
  filter: string | null
}