import StarshipPilotsScreenView from './components'
import { connect } from 'react-redux'
import PilotService from '../pilotService'

const mapStateToProps = (state, props) => ({
    ...props,
    pilots: PilotService.Selectors.getPilots(state),
    isLoading: PilotService.Selectors.getIsLoading(state),
    error: PilotService.Selectors.getError(state)
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchPilot: (urls) => {
        dispatch(PilotService.Actions.fetchPilot(urls))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StarshipPilotsScreenView)