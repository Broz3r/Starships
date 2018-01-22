import React from 'react'
import { 
    View,
    Text,
    StyleSheet 
} from 'react-native'
import { BackHandler } from 'react-native';
import  { ViewPager } from 'rn-viewpager';
import StarshipPilotePage from './starshipPilotPage'

export default class StarshipPilotsScreenView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: true
        }
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillMount() {
        this.props.fetchPilot(this.props.pilots)
    }

    onNavigatorEvent(event) {
        switch (event.id) {
            case 'willDisappear':
                console.log("WILL DISAPPEAR")
                this.setState({
                    isVisible: false
                })
                break;
            default:
                break;
        }
    }

    render() {
        if (this.state.isVisible) {
            return (
                <ViewPager style = {{flex: 1}}>
                    {this.props.pilots.map((pilot, index) => (
                        <View key = {index} >
                            <StarshipPilotePage pilot = {pilot} index = {index} key = {index}/>
                        </View>
                    ))}
                </ViewPager>
            )
        }
        return (<View/>)
    }
}