import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import Utils from '../utils'

export default DataRow = (props) => {
    return (
        <View style = {styles.root} >
            <View style = {styles.rawContainer}>
                <Text style = {styles.title}>
                    {props.title}
                </Text>
                <Text style = {styles.data}>
                    {Utils.StringUtils.capitalizeFirstLetter(props.data)}
                </Text>
            </View>
            <View style = {styles.separator}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 0,
        alignItems: 'stretch'
    },
    rawContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12
    },
    title: {
        flex: 0,
        color: '#bbb'
    },
    data: {
        flex: 1,
        textAlign: 'right'
    },
    separator: {
        flex: 0,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#bbb'
    }
})

