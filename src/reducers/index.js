import {combineReducers} from 'redux';
import modalsReducer from './modalsReducer';
import validationsReducer from './validationsReducer';
import tweetReducer from './tweetReducer';

export default combineReducers({
	modals: modalsReducer,
	validations: validationsReducer,
	tweets: tweetReducer,
});
