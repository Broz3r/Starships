import React from 'react'
import { 
    View,
    FlatList,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet 
} from 'react-native'
import StarshipDetailScreenView from '../../starshipDetailScreen'
import Cell from './cell'

const extractKey = ({url}) => url // Do not knwo how but hey, it's delete a warning !

const Separator = () => {
    return (
        <View style={{height: 12}} />
    )
}

export default class StarshipListScreenView extends React.Component {

    componentWillMount() {
        this.props.fetchStarships()
    }

    cell = ({item}) => {
        return (
            <Cell 
                title = {item.name}
                subtitle = {item.model}
                onPress = {() => this._onItemClicked(item)}
            />
        )
    }

    _onItemClicked(item) {
        return () => {
            console.log(item.name)
            this.props.navigator.push({
                screen: StarshipDetailScreenView.constants.ModuleName,
                title: "Starship information",
                passProps: {
                    starshipUrl: item.url
                }
            })
        }
    }

    render() {
        return (
          <View style={styles.container}>
            {this.props.isLoading &&
                <View style = {styles.loadingContainer} isHidden = {!this.props.isLoading}>
                    <ActivityIndicator size="large"/>
                </View>
            }
            {!this.props.isLoading && this.props.error !== '' &&
                <View style = {styles.errorContainer}>
                    <Text style = {styles.title}>
                        Error:
                    </Text>
                    <Text
                        style = {{marginBottom: 10}}>
                        {this.props.error}
                    </Text>
                    <Button 
                        title = 'Retry' 
                        onPress = {this.props.fetchStarships}/>
                </View>
            }
            {this.props.error === '' && !this.props.isLoading &&
                <FlatList
                    style={styles.list}
                    data={this.props.starships}
                    renderItem={this.cell}
                    keyExtractor={extractKey}
                    ItemSeparatorComponent={Separator}
                    ListHeaderComponent={Separator}
                    ListFooterComponent={Separator}
                />
            }
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        // backgroundColor: '#ffaa00'
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