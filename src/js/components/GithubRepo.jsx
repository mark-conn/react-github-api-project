var React = require('react');


var GithubUser = React.createClass({
    propTypes: {
    params: React.PropTypes.shape({
        user: React.PropTypes.array.isRequired,

      
    })
    },
    
    render: function() {
        return (
            <div>
            <a href={this.props.user.repos_url}>
                {this.props.user.full_name}/ {this.props.user.stargazers_count}

            </a>
            </div>
            )
    }
    })


module.exports = GithubUser;