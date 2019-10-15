import { State, Action, ActionsTypes } from './interfaces';

export const initialState: State = {
  notes: [{
    id: 0,
    text: 'test',
    tags: []
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