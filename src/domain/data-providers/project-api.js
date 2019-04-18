const jiraFunction = require('../autorization/user');

function getProject(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.project.getAllProjects( {} ,
        (error, issues) => {;
            callback(issues)
            console.log('this is:' + issues);
        }
    )
}
module.exports= getProject;