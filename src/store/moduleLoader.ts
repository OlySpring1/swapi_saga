import { Action } from 'redux';

export const LOADER_START = 'LOADER_START'
export const LOADER_FINISH = 'LOADER_FINISH'

export const startLoading = () => ({ type: 'LOADING_START' })
export const finishLoading = () => ({ type: 'LOADING_FINISH' })
type startLoading = Action<typeof LOADER_START> 
type finishLoading = Action<typeof LOADER_FINISH> 

type AllowedActions = startLoading |finishLoading;


const reducer = (loading = false, action: AllowedActions) => {
  switch (action.type) {
    case LOADER_START:
      return true

    case LOADER_FINISH:
      return false

    default:
      return loading
  }
}
export default reducer
