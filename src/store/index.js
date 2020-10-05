import { createStore } from 'redux'

import rootReducer from '../reducers'

const store = createStore(rootReducer)

export function configureStore() {
    return {
        ...store
    }
}

export function getStoreDispatch() {
    return store.dispatch
}
