const jiraFunction = require('../autorization/user');
const request = require('request');
const Buffer = require('buffer/').Buffer

function getIssues(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.board.getIssuesForBoard({
        boardId: 15,
        fields: [] 
    },
       function (error, issues) {
            if (error) { `error in getting issues:${console.log(error)}` }
            callback(issues)
        }
    )
}
module.exports = getIssues;