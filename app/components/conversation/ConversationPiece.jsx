var React = require('react');

class ConversationPiece extends React.Component{
  render () {
    var {text} = this.props;
    return (
      <li>{text}</li>
    )
  }
}

module.exports = ConversationPiece;
