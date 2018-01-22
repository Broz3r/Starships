import React from 'react'
import { 
    View,
    Text,
    StyleSheet 
} from 'react-native'

import  {ViewPager } from 'rn-viewpager';

export default class StarshipPilotsScreenView extends React.Component {

    componentWillMount() {
        this.props.fetchPilot(this.props.pilots)
    }

    render() {
        return (
            <ViewPager style = {{flex: 1}}>
                {this.props.pilots.map((pilot, i) => (
                    <View style = {styles.container} key = {i}>
                        <Text>
                            {pilot}
                        </Text>
                    </View>
                ))}
            </ViewPager>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})