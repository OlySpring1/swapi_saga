import { Action } from 'redux';

export const RESULT_QUERY = 'RESULT_QUERY';
export const INPUT_CHANGED = 'INPUT_CHANGED';

export const setChangedSearchInput = (query: string) => (
  {
    type: INPUT_CHANGED,
    query,
  }
);
export type setChangedSearchInput = Action<typeof INPUT_CHANGED> & {
      query: string;
}


export type setResultQuery = Action<typeof RESULT_QUERY> & {
  resultQuery: string[];
}

type AllowedActions = setResultQuery;
let initialState: string[] = [];
const reducer = (resultQuery = initialState, action: AllowedActions) => {
  switch (action.type) {
    case RESULT_QUERY:
      return action.resultQuery;
    default:
      return resultQuery;
  }
};

export default reducer;
