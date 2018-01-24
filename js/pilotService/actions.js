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

export const savePilot = (pilot) => {
    return ({
        type: ActionTypes.SAVE,
        pilot: pilot
    })
}

export const receiveSuccessPilot = (pilot) => {
    return ({
        type: ActionTypes.SUCCESS
    })
}

export const receiveErrorPilot = (error) => {
    return ({
        type: ActionTypes.ERROR,
        error: error.message
    })
}