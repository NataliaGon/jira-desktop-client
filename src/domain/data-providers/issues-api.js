const jiraFunction = require('../autorization/user');


function getIssues(name, password, callback, boardId, boardName,startAt) {
    const jira = jiraFunction(name, password)
    jira.board.getIssuesForBoard({
        boardId: boardId,
        maxResults: 50,
        startAt:startAt,
        fields: [] 
    },
       function (error, issues) {
            if (error) { `error in getting issues:${console.log(error)}` }
            callback(issues, boardName, boardId);
            console.log(issues);
        }
    )
}
module.exports = getIssues;