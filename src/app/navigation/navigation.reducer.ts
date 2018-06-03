import { NavActionChnage } from './naviagtion.actions';

export interface State {
  meadata: string;
}

export const initialState: State = {
  meadata: '1',
};

export function reducer(state = initialState, action: NavActionChnage): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

