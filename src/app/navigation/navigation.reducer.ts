import { NavActionChnage, NavActonType } from './naviagtion.actions';

export interface NavigationState {
  topic: string;
}

export const initialState: NavigationState = {
  topic: '',
};

export function reducer(state = initialState, action: NavActionChnage): NavigationState {
  switch (action.type) {
    case NavActonType.Change:
      return {
        ...action.payload,
      };
    default: {
      return state;
    }
  }
}

