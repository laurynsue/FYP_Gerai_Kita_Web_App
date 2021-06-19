const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const routerCategory = require('./category');
const routerProduct = require('./product');
const routerMember = require('./member'); //member
const routerSeller = require('./seller');
const routeSearchCategory = require('./searchcategory');
const routeCartAndOrders = require('./cartandorder');
const routerMemberLogin = require('./memberLogin');

const app = express();

app.use(cors());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// if /member means need to login as member
app.use('/category',routerCategory) //for category page and admin to manage category
app.use('/product',routerProduct) //product related
app.use('/member',routerMember) //member
app.use('/seller',routerSeller) //seller
app.use('/search/product',routeSearchCategory) //for member to search products through category
app.use('/member',routeCartAndOrders) //cart and order related
app.use('/memberLogin', routerMemberLogin)
app.use(express.static('images'))

app.listen(4000, '0.0.0.0', () =>{
    console.log('Server has started');
})