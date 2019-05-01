const jiraFunction = require('../autorization/user');

function getUserGroup(name, password){
    // const jira = jiraFunction(name, password);
    console.log(name, password);
    // jira.group.getGroup({
    //     groupName:'morning.agency'
    // },
    //    function (error, group) {
    //         if (error) { `error in getting issues:${console.log(error)}` }
    //         callback(group);
    //         console.log(group);
    //     }
    // )
}
module.exports = getUserGroup;