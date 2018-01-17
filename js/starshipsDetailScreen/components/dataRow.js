import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default DataRow = (props) => {
    return (
        <View style = {styles.rawContainer}>
            <Text style = {styles.title}>
                {props.title}
            </Text>
            <Text style = {styles.data}>
                {props.data}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rawContainer: {
        flex: 0,
        marginBottom: 6
    },
    title: {
        flex: 0,
        fontWeight: 'bold'
    },
    data: {
        flex: 0
    }
})

