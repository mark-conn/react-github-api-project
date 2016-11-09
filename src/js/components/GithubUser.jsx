var React = require('react');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
    propTypes: {
    params: React.PropTypes.shape({
        user: React.PropTypes.array.isRequired,

      
    })
    },
    
    render: function() {
        return (
            <div>
            <Link to={"/user/" + this.props.user.login}>
                <img src={this.props.user.avatar_url}/>
                {this.props.user.login}
            </Link>
            </div>
            )
    }
    })


module.exports = GithubUser;