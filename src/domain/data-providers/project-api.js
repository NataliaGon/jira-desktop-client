const jiraFunction = require('../autorization/user');

function getProject(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.project.getAllProjects(
        {},
        (error, issues) => {;
            callback(issues)
        }
    )
}
module.exports= getProject;