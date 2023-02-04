const products = [];

// /admin/add-product => GET
let getAddProduct =((req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
let postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

let getAddProducts =((req, res, next)=>{
   
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
});

  
  module.exports = {
    getAddProduct,
    postAddProduct,
    getAddProducts
  }

