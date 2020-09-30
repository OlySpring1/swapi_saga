import {rootReducer} from './reducers'

export type RootState = ReturnType<typeof rootReducer>;

export const getPersons = (state: RootState) => state.persons;
export const getQuery = (state: RootState) => state.resultQuery;
export const getIsLoading = (state: RootState) => state.loading
export const getErrorMessage = (state: RootState) => state.error

export const getVisiblePersons = (state: RootState) => {

  return state.resultQuery.length > 0 ? state.resultQuery 
    : state.persons
};
