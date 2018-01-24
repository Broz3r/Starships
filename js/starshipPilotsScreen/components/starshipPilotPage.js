import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    ActivityIndicator,
} from 'react-native'

import iconPilot from '../../../assets/ic_pilot.png'

export default StarshipPilotPage = (props) => {
    const pilotIsDefined = props.pilot !== undefined
    return (
        <View style = {styles.container}>
            {!pilotIsDefined && props.isLoading &&
                <View style = {styles.loadingContainer} isHidden = {!props.isLoading}>
                    <ActivityIndicator size="large"/>
                </View>
            }
            {!pilotIsDefined && !props.isLoading && props.error !== '' &&
                <View style = {styles.errorContainer}>
                    <Text style = {styles.title}>
                        Error:
                    </Text>
                    <Text
                        style = {{marginBottom: 10}}>
                        {props.error}
                    </Text>
                    <Button 
                        title = 'Retry' 
                        onPress = {() => {console.log('RETRY')}}
                        />
                </View>
            }
            {pilotIsDefined &&
                <ScrollView>
                    <View style = {styles.header}>
                        <Image source = {iconPilot} style = {{margin: 12}}/>
                        <Text style = {styles.title}>
                            {pilotIsDefined ? props.pilot.name : 'UNKNOWN'}
                        </Text>
                    </View>
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})