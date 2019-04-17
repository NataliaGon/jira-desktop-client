const jiraFunction = require('../autorization/user');

function getUserProfile(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.myself.getMyself(
        {},
        (error, me) => {;
            callback(me)
        }
    )
}
module.exports= getUserProfile;