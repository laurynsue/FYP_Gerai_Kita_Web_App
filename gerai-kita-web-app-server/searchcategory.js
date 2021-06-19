const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')

const router = express.Router()

const upload = multer({dest: 'images'}) 


router.get('/fashion', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from product where categoryID = 3`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.get('/stationary', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from product where categoryID = 4`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/beautyandpersonalcare', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from product where categoryID = 5`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/homeandliving', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from product where categoryID = 6`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//for all to search products in searchbar [guest,admin,member,seller]
router.post('/',(request,response)=>{
    const {productName} = request.body

    const connection = db.connect1()

    const statement = `select * from product where name like '%${productName}%'  `
    
    connection.query(statement,(error,data)=>{
        console.log(statement)
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router 