import * as ActionTypes from './actionTypes'
import * as Constants from './constants'

const INITIAL_STATE = {
    [Constants.starshipsKey]: [],
    [Constants.isLoadingKey]: false,
    [Constants.errorKey]: '',
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOADER:
            return {
                ...state, 
                [Constants.isLoadingKey]: true
            }
        case ActionTypes.SUCCESS:
            return {
                [Constants.isLoadingKey]: false,
                [Constants.starshipsKey]: action.starships,
                [Constants.entitiesKey]: action.entities,
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