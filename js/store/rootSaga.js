import { all, call } from 'redux-saga/effects'
import StarshipService from '../starshipService'
import PilotService from '../pilotService'

export default function* rootSaga() {
    console.log("Starting Root Saga")
    yield all([
        call(StarshipService.bindSagaCommands),
        call(PilotService.bindSagaCommands)
    ])
}
