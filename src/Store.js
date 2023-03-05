import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllProductsReducers } from './Reducers/productReducers';
import thunk from 'redux-thunk';



const finalReducer = combineReducers({
    getAllProductsReducers: getAllProductsReducers
})


const initialState = {}

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store