var React = require('react');
var {connect} = require('react-redux');
import {addToConversation} from 'actions';
var ChatBot = require('ChatBot');


export class AskQuestion extends React.Component{
  constructor(props) {
    super(props);
    this.state = {questionText: ''};

    //bind method so that it has access to 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({questionText: event.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    var questionText = this.state.questionText;
    this.props.dispatch(addToConversation(questionText, "question"));
    this.props.dispatch(addToConversation(ChatBot.respondToQuestion(questionText), "answer"));
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
            <input type="text"
              className="input-group-field"
              value={this.state.questionText}
               onChange={this.handleChange}
              placeholder="Ask a Question"/>
            <button type="submit">Ask</button>
      </form>
    )
  }
}



export default connect()(AskQuestion);
