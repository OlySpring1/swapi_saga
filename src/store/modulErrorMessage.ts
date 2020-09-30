import { Action } from 'redux';

export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (error: string) => ({ type: SET_MESSAGE, error });
type setMessage = Action<typeof SET_MESSAGE> & {
  error: string
}

type AllowedActions = setMessage
const reducer = (error = '', action: AllowedActions) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.error;
    default:
      return error;
  }
};

export default reducer;
