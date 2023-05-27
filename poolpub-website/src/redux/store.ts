import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsletterReducer from './reducers';

const rootReducer = combineReducers({
  newsletter: newsletterReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
