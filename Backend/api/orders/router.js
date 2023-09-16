const app = require('express');
const router = app.Router();
const { demoMail, addOrders, orderById, allOrders } = require('./controller')

router.post('/send-demo-mail', demoMail)
router.post('/create-order', addOrders)
router.get('/all-orders', allOrders)
router.get('/order-by-id/:_id', orderById)


module.exports = router