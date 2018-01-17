import React from 'react'
import { 
    View,
    Text,
    StyleSheet
} from 'react-native'
import DataRow from './dataRow'

export default class StarshipDetailScreenView extends React.Component {

    componentWillMount() {
        console.log(this.props.starship)
    }

    render() {
        return (
            <View style = {styles.container}>
                <DataRow title = 'Name:' data = {this.props.starship.name}/>
                <DataRow title = 'Model:' data = {this.props.starship.model}/>
                <DataRow title = 'Starship Class:' data = {this.props.starship.starship_class}/>
                <DataRow title = 'Manufacturer:' data = {this.props.starship.manufacturer}/>
                <DataRow title = 'Cost:' data = {'$' + this.props.starship.cost_in_credits}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10
    },
    rawContainer: {
        flex: 0,
        flexDirection: 'row'
    },
    title: {
        flex: 0,
        marginRight: 10,
        fontWeight: 'bold'
    },
    data: {
        flex: 0
    }
})