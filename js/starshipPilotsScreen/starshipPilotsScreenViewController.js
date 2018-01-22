import React from 'react'
import { 
    View,
    Text,
    StyleSheet 
} from 'react-native'

import  {ViewPager } from 'rn-viewpager';

export default class StarshipPilotsScreenViewController extends React.Component {

    render() {
        return (
            <ViewPager style = {{flex: 1}}>
                {this.props.pilots.map(pilot => (
                    <View style = {styles.container}>
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