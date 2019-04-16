const jiraFunction = require('../autorization/user');

function getJira(name, password, callback) {
    console.log(name, password)
    const jira = jiraFunction(name, password)
    jira.board.getAllBoards(
        {},
        (error, board) => {
            if (error){
                console.log('no response from jira' + error); 
            }else{
                callback(board)
                console.log(board);
            }
            
        }
    )
}
	
module.exports= getJira;