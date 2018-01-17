import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSageMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

export default function configureStore(rootReducer) {
    const logger = createLogger({
        predicate: () => __DEV__
    })

    const sagaMiddleware = createSageMiddleware()
    const middlewares = applyMiddleware(logger, sagaMiddleware)

    const store = createStore(rootReducer, middlewares)

    sagaMiddleware.run(rootSaga)

    return store
}