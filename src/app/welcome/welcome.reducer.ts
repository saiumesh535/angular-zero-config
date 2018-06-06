import { createFeatureSelector, createSelector } from '@ngrx/store';
import { welcomeActions, WelcomeActionType } from './welcome.actions';

export interface Welcome {
  topics: string[];
}


export const initialState: Welcome = {
 topics: []
};


export function reducer(state = initialState, action: welcomeActions): Welcome {
  switch (action.type) {
    case WelcomeActionType.AddTopics:
      return {
        ...state, ...action.payload
      };
    default: {
      return state;
    }
  }
}
