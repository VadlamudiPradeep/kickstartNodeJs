const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require("./controllers/404");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactUsRoutes = require("./routes/contactus"); // create contact us route
const successRoutes = require("./routes/success"); // create success route


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoutes); // use contact us route
app.use(successRoutes); // use success route


app.use(errorController.get404);

app.listen(3000);