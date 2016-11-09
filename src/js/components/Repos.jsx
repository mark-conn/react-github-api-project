var React = require('react');
var $ = require('jquery');
var GithubRepo = require('./GithubRepo')

var Repos = React.createClass({
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
      $.getJSON(`https://api.github.com/users/${this.props.params.username}/repos?access_token=f231a12d51caea95fc8a4ce8714c2727f3c3a2e8`)
      .then(function(data) 
      {
          that.setState({repos: data});
      });  
    },
    
    render: function() {
        if (!this.state.repos) {
            return <div>LOADING FOLLOWING...</div>
        } else {
        console.log(this.state.repos)
        return (
            <div className="repos-page">
              <h3>{this.props.params.username}'s Repos</h3>
                <ul>
                <li>
                  {this.state.repos.map(function(user){
                  return <GithubRepo user={user} key={user.id}/>
                  }
                  )}  
                </li>
              </ul> 
            </div>
            
            )
    }}
})


module.exports = Repos;