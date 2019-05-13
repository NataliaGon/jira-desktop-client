const jiraFunction = require('../autorization/user');


function editIssue(name, password,issue) {
    const jira = jiraFunction(name, password)
    jira.issue.editIssue({
        issueId:issue.issueId,
        issue: issue.issue   
    },
       function (error, issues) {
            if (error) { console.log(error) }
            console.log(`edit issue ${issues}`);
        }
    )
}
module.exports = editIssue;