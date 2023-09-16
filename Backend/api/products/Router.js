const app = require('express');
const router = app.Router();
const { getAllProducts,createProducts, getProduct, productByCategory, productByBrand, productById, updateProduct, deleteProductById,
} = require('./Controller')


router.post('/create-products', createProducts);
router.get('/get-product', getProduct);
router.get('/product-by-category', productByCategory);
router.get('/product-by-brand', productByBrand);
router.get('/get-all-products',getAllProducts)
router.get('/product-by-id', productById);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:_id', deleteProductById);






module.exports = router;

