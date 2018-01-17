import { takeEvery, put, call } from 'redux-saga/effects'
import { normalize, denormalize } from 'normalizr';

import * as ActionTypes from './actionTypes'
import * as Actions from './actions'
import * as Schema from './schema'

function requestStarships(url) {
    return fetch(url)
            .then(response => response.json())
}

function* fetchStarshipUrl(url) {
    console.log('GET ' + url) 
    const json = yield call(requestStarships, url)
    const normalizedEntry = normalizeStarshipList(json.results)
    yield put(Actions.saveStarshipList(normalizedEntry.entities, normalizedEntry.result))
    return json.next
}

function* fetchStarshipsSaga(action) {
    yield put(Actions.fetchingStarshipsList())
    try {
        const starshipsUrl = "https://swapi.co/api/starships/"

        do {
            starshipsUrl = yield fetchStarshipUrl(starshipsUrl)
        } while (starshipsUrl !== null)

        yield put(Actions.receiveSuccessStarshipList())
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