import { combineReducers } from 'redux'
import createStore from './createStore'

import StarshipService from '../starshipService'

export default function configureStore () {
    const rootReducer = combineReducers({
        [StarshipService.Constants.ModuleName]: StarshipService.Reducer
    })

    return createStore(rootReducer)
}