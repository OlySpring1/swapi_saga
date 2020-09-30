import { Action } from 'redux';
export const REQUESTED_PERSON = 'REQUESTED_PERSON';
export const REQUESTED_PERSON_SUCCEEDED = 'REQUESTED_PERSON_SUCCEEDED'

export const loadPerson = () => ({
  type: REQUESTED_PERSON,
})

export const requestedPersonSucceeded = (persons: string[]) => ({
  type: REQUESTED_PERSON_SUCCEEDED,
})

type requestedPerson = Action<typeof REQUESTED_PERSON> 

type requestedPersonSucceeded = Action<typeof REQUESTED_PERSON_SUCCEEDED> & {
  persons: string[]
}

type AllowedActions = requestedPersonSucceeded;

let initialState: string[] = [];

const persons = (persons = initialState, action: AllowedActions) => {
  switch (action.type) {
    case REQUESTED_PERSON_SUCCEEDED:
      return [...persons, ...action.persons]
      default:
      return persons
  }
}

export default persons;