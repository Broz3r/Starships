import { Navigation } from 'react-native-navigation'

import StarshipListScreen from '../js/starshipListScreen'
import StarshipDetailScreen from '../js/starshipDetailScreen'
import StarshipPilotsScreen from '../js/starshipPilotsScreen'

export default function registerScreens(store, Provider) {
    Navigation.registerComponent(
        StarshipListScreen.constants.ModuleName, 
        () => StarshipListScreen.StarshipListScreenViewController,
        store,
        Provider
    )
    Navigation.registerComponent(
        StarshipDetailScreen.constants.ModuleName, 
        () => StarshipDetailScreen.StarshipDetailScreenViewController,
        store,
        Provider
    )
    Navigation.registerComponent(
        StarshipPilotsScreen.constants.ModuleName,
        () => StarshipPilotsScreen.StarshipPilotsScreenViewController,
        store,
        Provider
    )
}