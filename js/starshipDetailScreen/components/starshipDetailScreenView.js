import React from 'react'
import { 
    ScrollView,
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import StarshipPilotsScreen from '../../starshipPilotsScreen'

import Components from '../../components'
import Utils from '../../utils'

import iconStarship from '../../../assets/ic_starship.png'

export default class StarshipDetailScreenView extends React.Component {

    _showPilots = () => {
        console.log('Number of pilots: ' + this.props.starship.pilots.length)
        this.props.navigator.push({
            screen: StarshipPilotsScreen.constants.ModuleName,
            title: "Pilots",
            passProps: {
                urls: this.props.starship.pilots
            }
        })
    }

    _showFilms = () => {
        console.log('Number of films: ' + this.props.starship.films.length)
    }

    render() {
        return (
            <ScrollView>
                <View style = {styles.container}>
                    <View style = {styles.header}>
                        <Image source = {iconStarship} style = {{margin: 12}}/>
                        <Text style = {styles.title}>
                            {Utils.StringUtils.capitalizeFirstLetter(this.props.starship.name)}
                        </Text>
                        <Text >
                            {this.props.starship.model}
                        </Text>
                    </View>
                    <Text style = {styles.sectionTitle}>
                        Model information
                    </Text>
                    <Components.DataRow title = 'Starship Class' data = {this.props.starship.starship_class}/>
                    <Components.DataRow title = 'Manufacturer' data = {this.props.starship.manufacturer}/>
                    <Components.DataRow title = 'Length' data = {this.props.starship.length + ' m'}/>
                    <Components.DataRow title = 'Cost' data = {'$' + this.props.starship.cost_in_credits}/>
                    <View style = {styles.separator}/>
                    <Text style = {styles.sectionTitle}>
                        Capacity
                    </Text>
                    <Components.DataRow title = 'Crew' data = {this.props.starship.crew}/>
                    <Components.DataRow title = 'Passengers' data = {this.props.starship.passengers}/>
                    <Components.DataRow title = 'Cargo Capacity' data = {this.props.starship.cargo_capacity + ' kg'}/>
                    <Components.DataRow title = 'Consumables' data = {this.props.starship.consumables}/>
                    <View style = {styles.separator}/>
                    <Components.ButtonRow title = 'Pilots' disabled = {this.props.starship.pilots.length === 0} onPress = {() => this._showPilots()}/>
                    <Components.ButtonRow title = 'Films' disabled = {this.props.starship.films.length === 0} onPress = {() => this._showFilms()}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'white'
    },
    header: {
        flex: 0,
        alignItems: 'center',
        padding: 10,
        marginBottom: 12
    },
    title: {
        color: '#244356',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 6
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 12
    },
    separator: {
        flex: 0,
        height: 12,
        backgroundColor: '#eee'
    }
})