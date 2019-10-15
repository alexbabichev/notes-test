
import { ActionsTypes, AddNoteAction, FilterNotesAction, FilterClearAction } from './interfaces';

export function addNote(text: string): AddNoteAction {
  return {
    type: ActionsTypes.ADD_NOTE,
    payload: {
      id: Date.now(),
      text,
      tags: (text.match(/(^|\s)(#[a-z\d-]+)/ig) || []).map(tag => tag.trim())
    }
  }
};

export function filterNotes(filter: string): FilterNotesAction {
  return {
    type: ActionsTypes.FILTER_NOTES,
    payload: filter
  }
};

export function filterClear(): FilterClearAction {
  return {
    type: ActionsTypes.FILTER_CLEAR
  }
};

