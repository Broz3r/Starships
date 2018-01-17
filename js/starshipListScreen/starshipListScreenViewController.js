import StarshipListScreenView from './components'
import { connect } from 'react-redux'
import StarshipService from '../starshipService'

const mapStateToProps = state => ({
        starships: StarshipService.Selectors.getStarships(state),
        isLoading: StarshipService.Selectors.getIsLoading(state),
        error: StarshipService.Selectors.getError(state)
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchStarships: () => {
        dispatch(StarshipService.Actions.fetchStarships())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StarshipListScreenView)