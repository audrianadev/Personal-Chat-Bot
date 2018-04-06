export var addToConversation = (text, questionType) => {
  return {
    type: 'ADD_TO_CONVERSATION',
    text,
    questionType
  };
};
