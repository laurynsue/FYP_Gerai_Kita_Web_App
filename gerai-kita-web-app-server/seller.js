const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()

//view all sellers [admin]
router.get('/', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from seller`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to register seller [seller, admin]
router.post('/register', (request, response) => {
    const {sellerID,sellerName,sellerAddress,storeName,email,storeID} = request.body

    const connection = db.connect1()
    const statement = `
    insert into seller (sellerID,sellerName,sellerAddress,storeName,email,storeID)
    values('${sellerID}','${sellerName}','${sellerAddress}','${storeName}','${email}','${storeID}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.delete('/delete/:sellerID', (request, response) => {
    const {sellerID} = request.params
    const connection = db.connect1()
    const statement = `delete from seller where id = ${sellerID}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router