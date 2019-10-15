
import { ActionsTypes, AddNoteAction, FilterNotes, FilterClear } from './interfaces';

export function addNote(text: string, tags: string[]): AddNoteAction {
  return {
    type: ActionsTypes.ADD_NOTE,
    payload: {
      id: Date.now(),
      text,
      tags
    }
  }
};

export function filterNotes(filter: string): FilterNotes {
  return {
    type: ActionsTypes.FILTER_NOTES,
    payload: filter
  }
};

export function filterClear(): FilterClear {
  return {
    type: ActionsTypes.FILTER_CLEAR
  }
};

