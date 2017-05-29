import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
    routing,
    productsReducer
});
