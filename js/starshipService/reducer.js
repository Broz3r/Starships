import * as ActionTypes from './actionTypes'
import * as Constants from './constants'

const INITIAL_STATE = {
    [Constants.starshipsKey]: [],
    [Constants.entitiesKey]: { starships: {} },
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
        case ActionTypes.SAVE:
            action.starships.forEach(function(v) { state[Constants.starshipsKey].push(v) }, this) // add action.starships to state's starships
            state[Constants.entitiesKey].starships = {...state[Constants.entitiesKey].starships, ...action.entities.starships}
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