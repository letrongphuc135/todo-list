import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
const { default: rootReducer } = require("./reducers");

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;