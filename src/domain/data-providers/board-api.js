const jiraFunction = require('../autorization/user');


function getBoard(name, password, callback) {
    const jira = jiraFunction(name, password)
    jira.board.getAllBoards(
        {},
        (error, boards) => {
            if (error){
                console.log('no response from jira boards' + error); 
            }else{ 
                const user={
                    name:name,
                    password:password
                }
                callback(boards, user)
            }
        }
    )
}	
module.exports= getBoard;