import { combineReducers } from "redux";

const SET_PAGE = "SET_PAGE";
const SET_MOVE = "SET_MOVE";
const SET_DIR = "SET_DIR";

const initialState = {
  page: 1,
  move: false,
  direction: 1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SET_MOVE:
      return {
        ...state,
        move: action.value
      };
    case SET_DIR:
      return {
        ...state,
        direction: action.value
      };
    default:
      return state;
  }
};

export default combineReducers({
    akanksha: reducer,
  });

export const setPage = (page) => async (dispatch, getState) => {
  const { akanksha } = getState();

  if (akanksha.page != page) {
    dispatch({
      type: SET_PAGE,
      page
    });
  }
};

export const setMove = (value = false) => async dispatch => {
    dispatch({
      type: SET_MOVE,
      value
    });
};

export const setDir = (value) => async dispatch => {
  dispatch({
    type: SET_DIR,
    value
  });
};
