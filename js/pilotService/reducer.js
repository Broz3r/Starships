import * as ActionTypes from './actionTypes'
import * as Constants from './constants'

const INITAL_STATE = {
    [Constants.pilotsKey]: [],
    [Constants.isLoadingKey]: false,
    [Constants.errorKey]: ''
}

const reducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOADER:
            return {
                ...state,
                [Constants.isLoadingKey]: true
            }
        case ActionTypes.SAVE:
            state[Constants.pilotsKey].push(action.pilot)
            return state
        case ActionTypes.SUCCESS:
            return {
                ...state,
                [Constants.isLoadingKey]: false,
                [Constants.errorKey]: ''
            }
        case ActionTypes.ERROR:
            return {
                ...state,
                [Constants.isLoadingKey]: false,
                [Constants.errorKey]: action.error
            }
        default:
            return state
    }
}

export default reducer