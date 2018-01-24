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

export const savePilot = (url, pilot) => {
    return ({
        type: ActionTypes.SAVE,
        url: url,
        pilot: pilot
    })
}

export const receiveSuccessPilot = () => {
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