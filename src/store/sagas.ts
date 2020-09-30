import { put, takeEvery, all, delay, takeLatest, call } from 'redux-saga/effects'
import { LOADER_FINISH, LOADER_START } from './moduleLoader';
import { SET_MESSAGE } from './modulErrorMessage';
import { REQUESTED_PERSON, REQUESTED_PERSON_SUCCEEDED } from './modulPerson';
import { INPUT_CHANGED, RESULT_QUERY, setChangedSearchInput } from './modulSearch';
import API from '../utils/API'

const fetchPersons = async () => {
  try {
    let response = await API.get('/');
    const persons = response.data.results
      .map((person: IPerson) => person.name)

    return persons;
  } catch (error) {
    return error
  }
}

export function* handleLoadPerson() {
  yield put({ type: LOADER_START })
  try {
    const persons = yield call(fetchPersons);

    yield put({ type: REQUESTED_PERSON_SUCCEEDED, persons })

  } catch (error) {

    yield put({ type: SET_MESSAGE, error: 'Oops! Something went wrong... :(' })
  }
  finally {
    yield put({ type: LOADER_FINISH })
  }
}

function* watchFetchPersons() {
  yield takeEvery(REQUESTED_PERSON, handleLoadPerson)
}
function* setQueryAsync({ query }: setChangedSearchInput ) {
  
  yield delay(300)
  try {
    if (query.length === 0) {

      yield put({ type: RESULT_QUERY, resultQuery: [] })
      return
    }
    let response = yield API.get(`/?search=${query}`);

    const resultQuery = response.data.results
      .map((person: IPerson) => person.name)
    yield put({ type: RESULT_QUERY, resultQuery })
  } catch (error) {
    yield put({ type: SET_MESSAGE, error: 'Oops! Something went wrong... :(' })
  }
}

function* watchSearchInput() {
  // will cancel current running handleInput task
  yield takeLatest(INPUT_CHANGED, setQueryAsync);
}

export default function* rootSaga() {
  yield all([
    watchFetchPersons(),
    watchSearchInput(),
  ])
}