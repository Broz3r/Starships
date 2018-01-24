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
        this.props.fetchPilot(this.props.urls)
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
                    {this.props.urls.map((url, index) => (
                        <View key = {index} >
                            <StarshipPilotePage pilot = {this.props.pilots[url]} isLoading = {this.props.isLoading} error = {this.props.error} index = {index} key = {index}/>
                        </View>
                    ))}
                </ViewPager>
            )
        }
        return (<View/>)
    }
}