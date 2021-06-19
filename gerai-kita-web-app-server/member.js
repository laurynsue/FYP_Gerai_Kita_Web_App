const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

//to view all members [admin]
router.get('/', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from member`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))  //data->users
    })
})

//register member [member,admin]
router.post('/register', (request, response) => {
    const {username, memberAddress, email, memberName, memberImage, memberPW} = request.body
    const connection = db.connect1()
    const statement = `insert into member (username, memberAddress, email, memberName, memberImage, memberPW)
    values ('${username}', '${memberAddress}', '${email}','${memberName}', '${memberImage}', '${memberPW}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//member to login [member]
router.post('/login', function(request, response) {
	var email = request.body.email;
	var memberPW = request.body.email;
	if (email && email) {
		connection.query('select * from member where email = ? and memberPW = ?', [email, memberPW], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/home');
			} else {
				response.send('Incorrect email and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter email and Password!');
		response.end();
	}
});

//member to return homepage [member]
router.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

//delete member from its id [admin,member]
router.delete('/delete/:memberID', (request, response) => {
    const {memberID} = request.params
    const connection = db.connect1()
    const statement = `delete from member where memberID = ${memberID}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//to get member details [member,admin]
router.get('/edit_member', (request, response) => {
    const {memberID} = req.body.user
    const connection = db.connect1()
    const statement = `select * from member where memberID='${memberID}'`
    connection.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))  
    })
})

//to update member details [member,admin]
router.put('/edit_member/:memberID',(request,response)=>{
    const {memberID} = request.params
    const {memberAddress, email, memberName, memberImage, memberPW} = request.body
    const connection = db.connect1()

    const statement = `update member set memberName='${memberName}',memberAddress='${memberAddress}',memberImage='${memberImage}',email='${email}',memberPW='${memberPW}' where id =${memberID}`
    
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router