const jiraFunction = require('../autorization/user');


function getStatuses(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.status.getAllStatuses({
    },
       function (error, status) {
            if (error) { `error in getting issues:${console.log(error)}` }
            console.log(status);
            // callback(status);
        }
    );
    jira.project.getStatuses({

    },
    function (error, status) {
        if (error) { `error in getting issues:${console.log(error)}` }
        console.log(`project statuses${status}` );
        // callback(status);
    }
    );
    jira.project.getAllProjects({

    },
    function (error, projects) {
        if (error) { `error in getting issues:${console.log(error)}` }
        console.log(`project statuses${projects}` );
        callback(projects);
    }
    )
}
module.exports = getStatuses;