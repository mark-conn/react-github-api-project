var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
var GithubUser = require('./GithubUser')

var Following = React.createClass({
    propTypes: {
    // PropTypes.shape is like PropTypes.object but lets you define what's expected to be inside the object
    params: React.PropTypes.shape({
        username: React.PropTypes.string.isRequired
    })
    },
    
    getInitialState: function() {
      return {};  
        
    },
    
    componentDidMount: function() {
      var that = this;    
      $.getJSON(`https://api.github.com/users/${this.props.params.username}/following?access_token=f231a12d51caea95fc8a4ce8714c2727f3c3a2e8`)
      .then(function(data) 
      {
          that.setState({following: data});
      });  
    },
    
    render: function() {
        if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>
        } else {
        console.log(this.state.following)
        return (
            <div className="following-page">
              <h3>Following {this.props.params.username}</h3>
                <ul>
                <li>
                  {this.state.following.map(function(user){
                  return <GithubUser user={user} key={user.id}/>
                  }
                  )}  
                </li>
              </ul> 
            </div>
            
            )
    }}
})


module.exports = Following;