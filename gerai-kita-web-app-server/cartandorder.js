const db = require('./db')
const utils = require('./utils')
const express = require('express')
//const multer = require('multer')

const router = express.Router()

//const upload = multer({dest: 'images'})

// to insert details of adding to cart product
router.post('/', (request, response) => {
    const {orderID,productID,quantity,unitCost,shippingID,paymentID} = request.body
   
    const connection = db.connect1()
    const statement = `
    insert into 
    order (orderID,productID,quantity,unitCost,shippingID,paymentID)
    values(${orderID}, ${productID}, ${quantity}, ${unitCost}, ${shippingID},${paymentID} 0)`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to show product in cart list
router.post('/addcart', (request, response) => {
   
    const {memberID} = request.body
    const connection = db.connect1()
    const statement = `
    select
    o.orderID, o.totalAmount, o.quantity, o.productID, o.unitCost, o.shippingID, o.paymentID, p.imageFileName, p.productName
    from 
    order o 
    inner join
    product p 
    where o.productID = p.productID and o.memberID = ${memberID}  `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// when user is editing his cart product
router.put('/editCart', (request, response) => {
    const {quantity,unitCost,memberID,productID,orderTableID,totalAmount} = request.body
    
    const connection = db.connect1()
    const statement = `
    update order set quantity=${quantity},unitCost=${unitCost}, totalAmount=${totalAmount}, memberID=${memberID}, productID=${productID} where id = ${orderTableID} `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// to delete an item of cart
router.post('/deleteCart', (request, response) => {
   
    const {orderID} = request.body
    const connection = db.connect1()
    const statement = `delete from order where id = ${orderID}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to update orderlist (called when user is confirmed to order)
router.put('/confirmorder', (request, response) => {
    const {shippingType,shippingCost,shippingRegionID,memberID} = request.body
   
    const connection = db.connect1()
    const statement = `
    update shipping info set shippingType = '${shippingType}', shippingCost = '${shippingCost}', shippingRegionID = '${shippingRegionID}',flag = 1 where memberID = ${memberID} and flag = 0`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

// to insert address in seller table (called when user is confirmed to order)
router.post('/confirmorder/address', (request, response) => {
    const {memberName,memberAddress,memberID} = request.body
   
    const connection = db.connect1()
    const statement = `insert into seller (memberName,memberAddress,memberID) values('${memberName}','${memberAddress}',${memberID})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//to get address of seller
router.get('/seller/details', (request, response) => {
    
    const connection = db.connect1()
    const statement = `
    select * from seller`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


//to get list of orders of a member
router.post('/orders', (request, response) => {
    const {memberID} = request.body
    const connection = db.connect1()
    const statement = `
    select p.imageFileName,p.productName, o.orderID,o.quantity,o.totalAmount,o.storeName,o.PaymentMode,
    from order o inner join product p where o.ProductID = p.productID and o.memberID = ${memberID} and flag = 1`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

//delete order id [member]
router.delete('/orders/:id', (request, response) => {
    const {orderID} = request.params
    const connection = db.connect1()
    const statement = ` delete from order where id = ${orderID} `
     
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


//to get list of orders of All members
router.get('/dashboard/orders', (request, response) => {
    const connection = db.connect1()
    const statement = `
    select p.imageFileName,p.productName, o.orderID,o.quantity,o.totalAmount,o.storeName,o.PaymentMode,
    o.memberID from order o inner join product p where o.ProductID = p.productID and flag = 1`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


// to get list of orders of a user in admin side
router.get('/dashboard/UserOrders/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect1()
    const statement = `
    select p.imageFileName,p.productName, o.orderID,o.quantity,o.shippingID,o.totalAmount,o.paymentID
    from order o inner join product p where o.ProductID = p.productID and o.memberID=${memberID} and flag = 1`
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router