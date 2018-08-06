import { contentActions, ContentActionType } from './content.actions';

export interface Content {
  code: string;
}


export const initialState: Content = {
 code: ''
};


export function reducer(state = initialState, action: contentActions): Content {
  switch (action.type) {
    case ContentActionType.AddCode:
      return {
        ...state, ...action.payload
      };
    default: {
      return state;
    }
  }
}
