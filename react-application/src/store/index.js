import { createStore, combineReducers } from 'redux';
import bugReducer from '../reducers/bugReducer';
import projectReducer from '../reducers/projectReducer';


const rootReducer = combineReducers({
    bugState: bugReducer,
    projectState: projectReducer
})

const store = createStore(rootReducer);

export default store;