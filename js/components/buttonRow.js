import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native'

import rightChevron from '../../assets/ic_chevron_right.png'

export default ButtonRow = (props) => {
    return (
        <TouchableOpacity style = {styles.root} disabled = {props.disabled} onPress = {props.onPress} >
            <View style = {styles.rawContainer}>
                <Text style = {[styles.title, props.disabled ? styles.disabledTitle : {}]}>
                    {props.title}
                </Text>
                <Image source = {rightChevron} style = {props.disabled ? styles.disabledImage : {}}/>
            </View>
            <View style = {styles.separator}/>
        </TouchableOpacity>
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
        flex: 1,
        fontWeight: 'bold',
        color: 'black'
    },
    disabledTitle: {
        color: "#bbb"
    },
    disabledImage: {
        tintColor: "#bbb"
    },
    separator: {
        flex: 0,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#bbb'
    }
})

