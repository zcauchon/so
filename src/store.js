import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from '@reducers';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';


export default ({children, initialState ={}}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise, reduxThunk)
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}