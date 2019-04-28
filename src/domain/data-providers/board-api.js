const jiraFunction = require('../autorization/user');

function getJira(name, password, callback) {

    const jira = jiraFunction(name, password)
    jira.board.getAllBoards(
        {},
        (error, boards) => {
            if (error){
                console.log('no response from jira' + error); 
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
module.exports= getJira;