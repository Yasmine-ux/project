import { GET_CATEGORIES } from "../constants/actions_types";
import axios from "axios";

export const getCategories = () => (dispatch) => {
  axios
    .get("localhost:5000/categories/")
    .then((res) => dispatch({ type: GET_CATEGORIES, payload: res.data }))

    .catch((err) => console.log(err));
};
