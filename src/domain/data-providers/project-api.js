const jiraFunction = require('../autorization/user');
const request = require('request');
const Buffer = require('buffer/').Buffer

function getIssues(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.issue.getIssue({
        issueKey: 'PRND-15'
    },
       function (error, issues) {
            if (error) { `error in getting issues:${console.log(error)}` }
            callback(issues)

        }
    )
//    const passw= Buffer.from(`${name}:${password}`).toString('base64');
//     var options = {
//         method: 'GET',
//         url: 'https://jira.atlassian.net/rest/agile/1.0/board/41/issue',
//         headers: {'content-type': 'application/json',  authorization: 'Basic'+passw }
//       }
  
//       request(options, function (error, response, body) {
//         if (error) throw new Error(error);
//       console.log(response, body);
//       });

}
module.exports = getIssues;