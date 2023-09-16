const app = require('express');
const router = app.Router();

const {getBrand,getBrandById,updateBrandById,deleteProductsByBrand,createBrands} = require('./controller')



//brands

router.get('/get-brand', getBrand);
router.post('/create-brands', createBrands);
router.delete('/delete-products-by-brand', deleteProductsByBrand);
router.put('/update-brand/:id', updateBrandById); 
router.get('/get-brand-by-id', getBrandById);


module.exports = router;
