import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import createStore from './js/store'
import registerScreens from './config/screens'

import StarshipListScreen from './js/starshipListScreen'

const store = createStore()
registerScreens(store, Provider)
Navigation.startSingleScreenApp({
    screen: {
        screen: StarshipListScreen.constants.ModuleName,
        title: 'Star Wars Starships',
        navigatorStyle: {
            navBarBackgroundColor: '#FFAA00'
        }
    }
})