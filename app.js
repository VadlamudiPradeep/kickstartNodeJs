
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// let adminRoutes = require('./routes/admin');
// let shopRoutes= require('./routes/shop');
const userRoutes = require("./routes/login"); // Create user route
const homeRoutes = require("./routes/home");


app.use(bodyParser.urlencoded({extended : false}));

app.use(userRoutes); // *** Filtering Paths ***  // use user route
app.use(homeRoutes);

// app.use('/admin',adminRoutes);
// app.use(shopRoutes);

app.use((req ,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})


app.listen(3000);