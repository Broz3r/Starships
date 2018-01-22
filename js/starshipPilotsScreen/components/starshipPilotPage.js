import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native'

import iconPilot from '../../../assets/ic_pilot.png'

export default StarshipPilotPage = (props) => {
    return (
        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Image source = {iconPilot} style = {{margin: 12}}/>
                    <Text style = {styles.title}>
                        Pilot
                    </Text>
                    <Text >
                        {props.pilot}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
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
    }
})