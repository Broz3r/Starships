import React from 'react'
import { 
    View,
    Text,
    StyleSheet 
} from 'react-native'

export default class StarshipPilotsScreenViewController extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.props.pilots}
                </Text>
            </View>
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