const JiraClient = require('jira-connector');

function jira(name, password) {
    return(
     new JiraClient({
            host: 'jira.morning.agency',
            basic_auth: {
                username: name,
                password: password
            }
        })
    )
}

module.exports=jira;
