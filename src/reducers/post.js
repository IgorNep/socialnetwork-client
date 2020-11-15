import { GET_POSTS, POST_ERROR, UPDATE_POSTS } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

//eslint-disable-next-line
export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case UPDATE_POSTS:
      return {
        ...state,
        posts: state.posts.map(
          (post) => (post = post._id === payload._id ? payload : post)
        ),
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
