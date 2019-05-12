const jiraFunction = require('../autorization/user');


function getOneBoard(name, password, callback) {

    const jira = jiraFunction(name, password)
    jira.board.getSprintsForBoard(
        {boardId:42},
        (error, board) => {
            if (error){
                console.log('no response from jira boards' + error); 
            }else{ 
                console.log(board);

                // callback(boards, user)
            }
            
        }
    )
}	
module.exports= getOneBoard;