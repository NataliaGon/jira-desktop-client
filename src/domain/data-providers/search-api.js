const jiraFunction = require('../autorization/user');

function search(name, password, search, callback) {
    const jira = jiraFunction(name, password);
    jira.search.search({
        search
    },
       function (error, results) {
            if (error) { `error in getting issues:${console.log(error)}` }
            callback(results);
        }
    )
}
module.exports = search;