const jiraFunction = require('../autorization/user');


function getIssues(name, password, callback, boardId, boardName) {
    const jira = jiraFunction(name, password)
    jira.board.getIssuesForBoard({
        boardId: boardId,
        maxResults: 50,
        startAt:1,
        fields: [] 
    },
       function (error, issues) {
            if (error) { `error in getting issues:${console.log(error)}` }
            callback(issues, boardName);
        }
    )
}
module.exports = getIssues;