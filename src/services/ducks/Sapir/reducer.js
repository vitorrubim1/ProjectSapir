import { SapirTypes } from "./types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SapirTypes.REQUEST:
      return { ...state, loading: true };

    case SapirTypes.LOGIN:
      return { ...state, loading: true, error: false };

    case SapirTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case SapirTypes.LOGIN:
      return { ...state, loading: true };

    case SapirTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case SapirTypes.SEND_CONTACT:
      return { error: false };

    case SapirTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};
