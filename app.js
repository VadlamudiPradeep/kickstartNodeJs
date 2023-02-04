const express = require("express");

const path = require("path");

const app = express();

//  *** Using Express Router ***
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop"); 
const contactUsRoutes = require("./routes/contactus"); 
const successRoutes = require("./routes/success"); 



app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, "publlic")));


app.use("/admin", adminRoutes);
app.use(shopRoutes); 
app.use(contactUsRoutes); 
app.use(successRoutes);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html")); 
});


app.listen(3000);