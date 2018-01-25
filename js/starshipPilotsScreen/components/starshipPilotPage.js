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

import Components from '../../components'
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
                            {props.pilot.name}
                        </Text>
                    </View>
                    <Text style = {styles.sectionTitle}>
                        Civil status
                    </Text>
                    <Components.DataRow title = 'Birth year' data = {props.pilot.birth_year}/>
                    <Components.DataRow title = 'Gender' data = {props.pilot.gender}/>
                    <View style = {styles.separator}/>
                    <Text style = {styles.sectionTitle}>
                        Physical caracteristic
                    </Text>
                    <Components.DataRow title = 'Height' data = {props.pilot.height + (props.pilot.height !== "unknown" ? ' cm' : '')}/>
                    <Components.DataRow title = 'Mass' data = {props.pilot.mass + (props.pilot.mass !== "unknown" ? ' kg' : '')}/>
                    <Components.DataRow title = 'Skin color' data = {props.pilot.skin_color}/>
                    <Components.DataRow title = 'Eyes color' data = {props.pilot.eye_color}/>
                    <Components.DataRow title = 'Hairs color' data = {props.pilot.hair_color}/>
                    <View style = {styles.separator}/>
                    <Components.ButtonRow title = 'Home World' disabled = {props.pilot.homeworld === 'unknown'} onPress = {() => console.log('HOME WORLD ' + props.pilot.homeworld)}/>
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
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 12,
        color: 'black'
    },
    separator: {
        flex: 0,
        height: 12,
        backgroundColor: '#eee'
    }
})