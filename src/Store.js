import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllProductsReducers } from './Reducers/productReducers';
import thunk from 'redux-thunk';
import { CartReducers } from './Reducers/CartReducers';



const finalReducer = combineReducers({
    getAllProductsReducers: getAllProductsReducers,
    CartReducers: CartReducers
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
console.log(cartItems);

const initialState = {
    CartReducers: {
        cartItems: cartItems
    }
}

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store