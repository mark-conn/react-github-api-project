var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
var GithubUser = require('./GithubUser')

var Followers = React.createClass({
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
      $.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=f231a12d51caea95fc8a4ce8714c2727f3c3a2e8`)
      .then(function(data) 
      {
          that.setState({followers: data});
      });  
    },
    
    render: function() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
        } else {
        console.log(this.state.followers)
        return (
            <div className="followers-page">
              <h3>Followers of {this.props.params.username}</h3>
                <ul>
                <li>
                  {this.state.followers.map(function(user){
                  return <GithubUser user={user} key={user.id}/>
                  }
                  )}  
                </li>
              </ul> 
            </div>
            
            )
    }}
})


module.exports = Followers;