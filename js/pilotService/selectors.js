import * as Constants from './constants'

export const getPilots = (state) => {
    return state[Constants.ModuleName][Constants.pilotsKey]
}

export const getIsLoading = (state) => state[Constants.ModuleName][Constants.isLoadingKey]

export const getError = (state) => state[Constants.ModuleName][Constants.errorKey]
