//@ts-check
import { getUnique } from "../../components/utilities/functions";

const initialState = {
  page: 1,
  pages: 1,
  perpage: 12,
  photo: [],
  result: [],
  profile: {},
  status: 200,
  date: "2019-02-22T10:36:05",
  title: "Recent photos",
  connectionError: 0,
  errorMessage: "error connecting to server",
  loadingMessage: "Searching server for photos..."
};
//const initialPhoto = { id: 0, description: '...', author: '...' };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        photo: getUnique([...state.photo, ...action.payload.photo]),
        connectionError: 0,
        page: action.payload.page,
        pages: action.payload.pages
      };
    case "RESULT":
      return {
        ...state,
        photo: getUnique(action.payload.photo),
        connectionError: 0,
        page: action.payload.page,
        pages: action.payload.pages
      };
    case "PROFILE":
      return {
        ...state,
        profile: action.payload.profile
      };
    case "CLEAR":
      return {
        ...state,
        photo: [],
        page: 1
      };

    case "CONNECTION_ERROR":
      return { ...state, connectionError: 1 };
    default:
      return state;
  }
};

export default rootReducer;
