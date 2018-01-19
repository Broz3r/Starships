import StarshipDetailScreenView from './components'
import { connect } from 'react-redux'
import StarshipService from '../starshipService'

const mapStateToProps = (state, props) => ({
    starship: StarshipService.Selectors.getStarshipWithURL(state, props.starshipUrl)
})

export default connect(mapStateToProps)(StarshipDetailScreenView)