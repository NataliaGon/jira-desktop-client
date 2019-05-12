const jiraFunction = require('../autorization/user');


function editIssue(name, password,issue,issueKey) {
   console.log(issue)
    const jira = jiraFunction(name, password)
    jira.issue.editIssue({
        issue: issue,
        issueKey:issueKey
    },
       function (error, issues) {
            if (error) { `error in getting issues:${console.log(error)}` }
            console.log(issues);
        }
    )
}
module.exports = editIssue;