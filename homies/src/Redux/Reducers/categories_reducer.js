import { GET_CATEGORIES } from "../constants/actions_types";

const initState = { categories: [] };

export const Reducer_categories = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};
