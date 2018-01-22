import * as ActionTypes from './actionTypes'

export const fetchPilot = (urls) => {
    return ({
        type: ActionTypes.FETCH_PILOT,
        urls: urls
    })
}

export const fetchingPilot = () => {
    return ({
        type: ActionTypes.LOADER
    })
}

export const receiveSuccessPilot = (pilot) => {
    return ({
        type: ActionTypes.SUCCESS,
        pilot: pilot
    })
}

export const receiveErrorPilot = (error) => {
    return ({
        type: ActionTypes.ERROR,
        error: error.message
    })
}