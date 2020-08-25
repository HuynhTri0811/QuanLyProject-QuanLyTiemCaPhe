const express = require('express');
const bodyParser = require('body-parser');
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
app.use('/category',require('./routes/Category.js'));
app.use('/size',require('./routes/Size.js'));
app.use('/product',require('./routes/Product.js'));
app.use('/productAndSize',require('./routes/ProductAndSize.js'));
app.use('/store',require('./routes/Store.js'));

database.sync().then(function(){
	app.listen(port);
	console.log(`Server is listening on port ${port}`);
}).catch(function(err){
	console.log(err);
	process.exit(1);
});



