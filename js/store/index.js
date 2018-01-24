import { combineReducers } from 'redux'
import createStore from './createStore'

import StarshipService from '../starshipService'
import PilotService from '../pilotService'

export default function configureStore () {
    const rootReducer = combineReducers({
        [StarshipService.Constants.ModuleName]: StarshipService.Reducer,
        [PilotService.Constants.ModuleName]: PilotService.Reducer
    })

    return createStore(rootReducer)
}