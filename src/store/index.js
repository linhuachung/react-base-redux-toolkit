import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducer/rootReducer.js';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';

const immutableStateTransformer = (state) => {
    if (state.toJS) {
        return fromJS(state.toJS());
    }
    return state
}

const middleware = [...getDefaultMiddleware({ immutableCheck: { isImmutable: immutableStateTransformer } }), thunk]
export const store = configureStore({
    reducer: rootReducer,
    middleware
})

