import { SET_COUNTER, INCREASE_ONE, DECREASE_ONE } from "../constants";

// Part2: Define Actions
export const setCounter = (counter) => (dispatch) => {
   dispatch({
     type: SET_COUNTER,
     payload: counter,
   });
 };
 export const increaseOne = (counter) => (dispatch) => {
  dispatch({
    type: INCREASE_ONE,
    payload: counter,
  });
};
export const decreaseOne = (counter) => (dispatch) => {
  dispatch({
    type: DECREASE_ONE,
    payload: counter,
  });
};