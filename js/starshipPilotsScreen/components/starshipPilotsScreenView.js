import React from 'react'
import { 
    View,
    Text,
    StyleSheet 
} from 'react-native'

import  { ViewPager } from 'rn-viewpager';
import StarshipPilotePage from './starshipPilotPage'

export default class StarshipPilotsScreenView extends React.Component {

    componentWillMount() {
        this.props.fetchPilot(this.props.pilots)
    }

    render() {
        return (
            <ViewPager style = {{flex: 1}}>
                {this.props.pilots.map((pilot, index) => (
                    <View key = {index} >
                        <StarshipPilotePage pilot = {pilot} index = {index} key = {index}/>
                    </View>
                ))}
            </ViewPager>
        )
    }
}