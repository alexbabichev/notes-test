import { State, Action, ActionsTypes } from './interfaces';

export const initialState: State = {
  notes: [{
    id: 0,
    text: 'test',
    tags: []
  }, {
      id: 1,
      text: 'test1 #tag, #tag2',
      tags: ['#tag', '#tag2']
    }],
  filter: null
}

export function reducer(state: State = initialState, action: Action) {
  switch(action.type) {
    case ActionsTypes.ADD_NOTE: {
      const note = action.payload;
      return { ...state,  notes: [...state.notes, note] }
    }

    case ActionsTypes.FILTER_NOTES: {
      const filter = action.payload;
      return { ...state, filter }
    }

    case ActionsTypes.FILTER_CLEAR: {
      return { ...state, filter: null }
    }

    default: 
      return state
  }
}