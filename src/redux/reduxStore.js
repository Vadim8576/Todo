import { createStore, combineReducers, applyMiddleware } from 'redux';
import nodesReducer from './nodesReducer';
import thunkMiddleware from 'redux-thunk';

const redusers = combineReducers({
    nodes: nodesReducer,
    // auth: authReducer,
    // app: appReducer
});


const store = createStore(redusers, applyMiddleware(thunkMiddleware));
// Применяя параметр applyMiddleware,
// мы говорим Store - прими промежуточные слои

window.store = store;

export default store;