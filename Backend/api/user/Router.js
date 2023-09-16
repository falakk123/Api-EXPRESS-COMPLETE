const app = require('express')
const router = app.Router()
const { Signup , Login ,allUsers, getUserbyEmail ,updateUserById} = require('./Controller')

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/getallusers', allUsers)
router.get('/userbyemail/:email', getUserbyEmail)
router.put('/updateuser/:id', updateUserById)
// router.get('/getuserbyemail', userbyEmail) // this is done using query params




module.exports = router

