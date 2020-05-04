var APIInfo = require('./token.json')

module.exports ={
  	respondToQuestion: function(questionAsked){
		let that = this;
	  	function start() {
		    gapi.client.init({
		      'apiKey': APIInfo.API_KEY
		    }).then(function() {
		      return gapi.client.request({
		        'path': `https://www.googleapis.com/calendar/v3/calendars/${APIInfo.CALENDAR_ID}/events`,
		      })
		    }).then( (response) => {
		      let events = response.result.items
		      console.log(events);
		      /*that.setState({
		        events
		      }, ()=>{
		        console.log(that.state.events);
		      })*/
		    }, function(reason) {
		      console.log(reason);
		    });
		}
		gapi.load('client', start)
	}
};
