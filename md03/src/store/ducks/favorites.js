export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
}

const initialState = {
  data: [],
  loading: false,
  errorOnAdd: null,
}

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true }
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.repository],
        loading: false,
        errorOnAdd: null,
      }
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        errorOnAdd: action.payload.message,
      }
    default:
      return state
  }
}

export const Creators = {
  addFavoriteRequest: repoName => ({
    type: Types.ADD_REQUEST,
    payload: {
      repoName,
    },
  }),

  addFavoriteSuccess: repository => ({
    type: Types.ADD_SUCCESS,
    payload: {
      repository,
    },
  }),

  addFavoriteError: (message = 'Erro ao adicionar favorito') => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
}
