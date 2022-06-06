const express = require('express')
const router = express.Router();
const usersController = require('../controllers/usersController')

router
    .route('/')
    .get(usersController.getUsersPage)

    router
    .route('/:id')
    .get(usersController.getUser)
    // .patch(updateUser)
    // .delete(deleteUser)
module.exports = router;