var React = require('react');
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import ConversationList  from 'ConversationList';
import AskQuestion from 'AskQuestion';

import addToConversation from "actions";

const mapStateToProps = function (state) {
  return {
    conversationList: state.conversationList
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addToConversation:addToConversation}, dispatch);
}

export class ChatBox extends React.Component{
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
