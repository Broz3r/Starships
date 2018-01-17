import * as ActionTypes from './actionTypes'
import { errorKey, starshipsKey } from './constants';
import { starship } from './schema';

export const fetchStarships = () => {
    return ({
        type: ActionTypes.FETCH_STARSHIPS
    })
}

export const fetchingStarshipsList = () => {
    return ({
        type: ActionTypes.LOADER
    })
}

export const saveStarshipList = (entities, starships) => {
    return ({
        type: ActionTypes.SAVE,
        entities: entities,
        starships: starships
    })
}

export const receiveSuccessStarshipList = () => {
    return ({
        type: ActionTypes.SUCCESS
    })
}

export const receiveErrorStarshipList = (error) => {
    return ({
        type: ActionTypes.ERROR,
        error: error.message
    })
}