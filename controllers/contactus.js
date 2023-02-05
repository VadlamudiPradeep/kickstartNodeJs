
let products = []
// /contactus => GET
let getAddContactus =((req, res, next) => {
  res.render('contactus', {
    pageTitle: 'Contact Us',
    path: '/',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

let postAddContactus =((req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/success');
});


let getAddSuccess =((req, res, next)=>{
   
    res.render('success', {
      prods: products,
      pageTitle: 'Success',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
});

  
  module.exports = {
    getAddContactus,
    postAddContactus,
    getAddSuccess
  }
