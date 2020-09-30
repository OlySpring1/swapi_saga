import { combineReducers } from 'redux';
import persons from './modulPerson';
import resultQuery from './modulSearch';
import loading from './moduleLoader';
import error from './modulErrorMessage';
export const rootReducer = combineReducers({
  persons,
  resultQuery,
  loading,
  error
});
