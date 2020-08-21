const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');


// Create app server
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
	extended: true,
  }));

// Connect database 
const database = require('./models/database.js');


// Router
app.use('/category',require('./routes/category.js'));
app.use('/size',require('./routes/size.js'));
app.use('/product',require('./routes/product.js'));
app.use('/productAndSize',require('./routes/productAndSize.js'));

database.sync().then(function(){
	app.listen(port);
	console.log(`Server is listening on port ${port}`);
}).catch(function(err){
	console.log(err);
	process.exit(1);
});


