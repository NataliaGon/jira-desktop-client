const jiraFunction = require('../autorization/user');

function getIssues(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.project.getProject(
        '10022',
        (error, issues) => {;
            callback(issues)
        }
    )
}
module.exports= getIssues;