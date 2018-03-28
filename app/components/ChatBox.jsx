var React = require('react');

import ConversationList  from 'ConversationList';
import AskQuestion from 'AskQuestion';

class ChatBox extends React.Component{
  render() {
    var {dispatch} = this.props;
    return (
      <div>
        <h1>ChatBox</h1>
        <ConversationList />
        <AskQuestion />
      </div>
    )
  }
}

module.exports = ChatBox;
