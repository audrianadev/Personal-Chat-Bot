var React = require('react');
import ConversationPiece from 'ConversationPiece';
var {connect} = require('react-redux');

export class ConversationList extends React.Component{
  render() {
    var renderConversation = () => {
      var {conversationList} = this.props;

      return conversationList.map((conversationPiece) => {
        return (
          <ConversationPiece key={conversationPiece.id} {...conversationPiece} />
        );
      });
    };

    return (
        <ul>{renderConversation()}</ul>
    )
  }
}

export default connect((state) => {
  return {
    conversationList: state.conversationList
  }
})(ConversationList);
