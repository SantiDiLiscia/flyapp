//Aca levantamos todos lo0s reducers
import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import productsReducer from './productsReducer'


export default combineReducers({
    userLogin: loginReducer,
    register: registerReducer,
    productList: productsReducer
});