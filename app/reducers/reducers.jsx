var moment = require('moment');
var uuid = require('uuid');

export var conversationListReducer = (state=[], action) =>{
  switch(action.type){
    case 'ADD_TO_CONVERSATION':
      return  [
          ...state,
            {
              id: uuid(),
              text:action.text,
              type:action.questionType,
              createdAt: moment().unix()
            }
          ];
    default:
      return state;
  }
}
