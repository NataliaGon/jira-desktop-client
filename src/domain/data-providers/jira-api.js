const jiraFunction = require('../autorization/user');

function getJira(name, password, callback) {
    console.log(name, password)
    const jira = jiraFunction(name, password)
    jira.board.getAllBoards(
        {},
        (error, board) => {
            callback(board)
            console.log(board);
        }
    )
}
	
module.exports= getJira;