const jiraFunction = require('../autorization/user');

function getIssues(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.issue.getCreateMetadata(
        {},
        (error, issues) => {;
            callback(issues)
        }
    )
}
module.exports= getIssues;