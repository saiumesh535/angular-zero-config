import { ShowPostsActions, ShowPosts } from './show-posts.actions';

export interface Posts {
  _id: string;
  title: string;
  description: string;
  authors_id: string;
  created_at: string;
}



export function reducer(state = null, action: ShowPostsActions): Posts {
  switch (action.type) {
    case ShowPosts.AddPosts:
      return action.payload;
    default: {
      return state;
    }
  }
}
