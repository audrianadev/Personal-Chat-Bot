import React from 'react';
import ReactDOM from 'react-dom';

import ChatBox from "ChatBox";
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  //console.log('New state', state);
});

ReactDOM.render(
  <Provider store={store}>
    <ChatBox/>
  </Provider>,
    document.getElementById('app')
);
