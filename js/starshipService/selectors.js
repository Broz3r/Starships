import { denormalize } from 'normalizr'

import * as Constants from './constants'
import * as Schema from './schema'

export const getStarships = (state) => {
    const starships = denormalize(state[Constants.ModuleName][Constants.starshipsKey],
        Schema.entity,
        state[Constants.ModuleName][Constants.entitiesKey])

    function compare(a, b) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1
        }
        return 0
    }

    starships.sort(compare)

    return starships
}   

export const getIsLoading = (state) => state[Constants.ModuleName][Constants.isLoadingKey]

export const getError = (state) => state[Constants.ModuleName][Constants.errorKey]

export const getStarshipWithURL = (state, url) => {
    return state[Constants.ModuleName][Constants.entitiesKey][Constants.starshipsNormalizedKey][url]
}