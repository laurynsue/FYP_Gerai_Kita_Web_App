const db = require('./db')
const express = require('express')

const router = express.Router()
 
router.post('/', (request, response) => {
    const {email,memberPW} = request.body
    const connection = db.connect1()
    const statement = `
    select * from member where email='${email}' and memberPW = '${memberPW}'`
    connection.query(statement, (error, data) => {
        const result = {}
        if(data.length != 0 )
        {
            result['status'] = 'success'
            result['data'] = data
            response.send(result) 
        }
        else
        {   
            result['status'] = 'error'
            result['error'] = error   
            response.send(result)           
        }
        
    })
})

module.exports = router