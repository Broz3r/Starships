import { takeEvery, put, call } from 'redux-saga/effects'
import { normalize, denormalize } from 'normalizr';

import * as ActionTypes from './actionTypes'
import * as Actions from './actions'
import * as Schema from './schema'

function requestStarships() {
    return fetch("https://swapi.co/api/starships/")
            .then(response => response.json())
}

function* fetchStarshipsSaga(action) {
    yield put(Actions.fetchingStarshipsList())
    try {
        const json = yield call(requestStarships)
        const normalizedEntry = normalizeStarshipList(json.results)
        yield put(Actions.receiveSuccessStarshipList(normalizedEntry.entities, normalizedEntry.result))
    } catch (error) {
        yield put(Actions.receiveErrorStarshipList(error))
    }
}

function normalizeStarshipList(starshipList) {
    return normalize(starshipList, Schema.entity)
}

export function* bindSagaCommands() {
    console.log("Binding Service Starships")
    yield takeEvery(ActionTypes.FETCH_STARSHIPS, fetchStarshipsSaga)
}