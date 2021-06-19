const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')

const router = express.Router()

const upload = multer({dest: 'images'}) 

//see all products [seller,admin,member,guest]
router.get('/', (request, response) => {
    const connection = db.connect1()
    const statement = `select * from product`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//to post a product [seller]
router.post('/post',upload.single('image'), (request, response) => {
    const file = request.file.filename
    const {productID,productName,productDescription,productPrice,imageFileName,productQuantity,sellerID,categoryID} = request.body

    console.log(categoryid);
    
    const connection = db.connect1()
    const statement = `
    insert into product (productID,productName,productDescription,productPrice,imageFileName,productQuantity,sellerID,categoryID)
    values('${productID}', ${productName}, ${productDescription}, ${productPrice}, ${imageFileName}, '${productQuantity}', '${sellerID}', '${categoryID}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//to delete product using productid [seller, admin]
router.delete('/delete/:productID', (request, response) => {
    const {productID} = request.params
    const connection = db.connect1()
    const statement = `delete from product where productID = ${productID}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// get details of a product [admin,seller,member,guest]    
router.get('/:productID', (request, response) => {
    const {productID} = request.params
    const connection = db.connect1()
    const statement = `select * from product where productID='${productID}'`
    connection.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))  
    })
})


//update product [seller,admin]
router.put('/update/:productID',(request,response)=>{
    const {productID} = request.params
    const {productName,productDescription,productPrice,imageFileName,productQuantity,sellerID,categoryID} = request.body
    const connection = db.connect1()

    const statement = `update product set productName='${productName}',productDescription='${productDescription}',productPrice='${productPrice}',imageFileName='${imageFileName}',productQuantity='${productQuantity}',sellerID='${sellerID}',categoryID='${categoryID}' where productID =${productID}`
    
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router 