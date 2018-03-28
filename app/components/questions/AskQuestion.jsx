var React = require('react');

class AskQuestion extends React.Component{
  handleSubmit(){
    console.log("Question Asked");
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
            <input type="text" className="input-group-field" placeholder="Ask a Question"/>
            <button className="button" type="submit">Ask</button>
      </form>
    )
  }
}

module.exports = AskQuestion;
