const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router = express.Router()

//to read category details of id and name [seller,admin]
router.get('/',(req,res)=>{
    const connection = db.connect1()
    const statement = `select categoryID,categoryName from category`
    connection.query(statement,(error,data)=>{
        connection.end()
        res.send(utils.createResult(error,data))
    })
})

//create new category [admin]
router.post('/',(req,res)=>{
    const {categoryID, categoryName,description} = req.body
    const connection = db.connect1()
    const statement = `insert into category (categoryID,categoryName,description) 
    values('${categoryID}','${categoryName}','${description}')`
    connection.query(statement,(error,data)=>{
        connection.end()
        res.send(utils.createResult(error,data))
    })
})
//update category [admin]
router.put('/update/:id',(req,res)=>{
    const {categoryID} = req.params
    const {categoryName,description} = req.body

    const connection = db.connect1()
    const statement = `update category set categoryName = '${categoryName}',description = '${description}'  where id = ${categoryID}`
    connection.query(statement,(error,data)=>{
        connection.end()
        res.send(utils.createResult(error,data))
    })
})

//delete category from id
router.delete('/delete/:id',(req,res)=>{
    const {categoryID} = req.params
    const connection = db.connect1()

    const statement = `delete from category where categoryID = ${categoryID}`
 
   // const statement2 = `delete from Product where categoryId = ${id}`

   connection.query(statement,(error,data)=>{
       connection.end()
       res.send(utils.createResult(error,data))
   })
})

module.exports = router