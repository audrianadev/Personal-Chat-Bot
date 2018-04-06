import { compose, combineReducers, createStore } from 'redux';
import {conversationListReducer} from 'reducers';

export var configure = () =>{
  var reducer = combineReducers({
    conversationList: conversationListReducer
  });

var store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

return store;
};
