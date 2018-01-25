import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native'

import Utils from '../../utils'

import rightChevron from '../../../assets/ic_chevron_right.png'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export default Cell = (props) => {
    return (
        <TouchableOpacity 
            style = {styles.cell}
            onPress = {props.onPress()} >

            <View style = {styles.leftIndicator}/>

            <View style = {styles.content}>
                <Text style = {styles.title} >
                    {Utils.StringUtils.capitalizeFirstLetter(props.title)}
                </Text>
                <Text style = {styles.subtitle} >
                    {props.subtitle}
                </Text>
            </View>

            <Image source = {rightChevron}/>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 12,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        elevation: 3
    },
    leftIndicator: {
        backgroundColor: '#FFAA00', 
        width: 6,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignSelf: 'stretch'
    },
    content: {
        flex: 1,
        margin: 12
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'black'
    },
    subtitle: {
        color: 'grey'
    }
})