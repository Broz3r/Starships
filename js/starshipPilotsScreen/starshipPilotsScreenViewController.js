import StarshipPilotsScreenView from './components'
import { connect } from 'react-redux'
import PilotService from '../pilotService'

const mapStateToProps = (state, props) => ({
    ...props
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchPilot: (urls) => {
        dispatch(PilotService.Actions.fetchPilot(urls))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StarshipPilotsScreenView)