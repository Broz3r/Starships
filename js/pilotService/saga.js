import { takeEvery, put, call } from 'redux-saga/effects'

import * as ActionTypes from './actionTypes'
import * as Actions from './actions'

function* fetchPilot(action) {
    yield put(Actions.fetchingPilot())
    action.urls.forEach(url => {
        console.log("FETCH PILOT : " + url) 
    });
}

export function* bindSagaCommands() {
    console.log("Binding Service Pilot")
    yield takeEvery(ActionTypes.FETCH_PILOT, fetchPilot)
}