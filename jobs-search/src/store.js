import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from '../reducers/jobs';
import errorsReducer from '../reducers/errors';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


const store = createStore(
    combineReducers({
        jobs: jobsReducer,
        errors: errorsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;