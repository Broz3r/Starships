import { takeEvery, put, call } from 'redux-saga/effects'

import * as ActionTypes from './actionTypes'
import * as Actions from './actions'

function requestPilot(url) {
    return fetch(url)
            .then(response => response.json())
}

function* fetchPilotUrl(url) {
    console.log('GET ' + url)
    const json = yield call(requestPilot, url)
    // TODO: Normalize
    yield put(Actions.savePilot(url, json))
}

function* fetchPilotSaga(action) {
    yield put(Actions.fetchingPilot())
    try {

        for (let index = 0; index < action.urls.length; index++) {
            const url = action.urls[index];
            yield fetchPilotUrl(url)
        }

        yield put(Actions.receiveSuccessPilot())
    } catch (error) {
        yield put(Actions.receiveErrorPilot(error))
    }
}

export function* bindSagaCommands() {
    console.log("Binding Service Pilot")
    yield takeEvery(ActionTypes.FETCH_PILOT, fetchPilotSaga)
}