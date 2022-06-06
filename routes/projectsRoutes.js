const express = require('express')
const router = express.Router();
const projectsController = require('../controllers/projectsController')

router.param('id', (req, res, next, val) => {
    console.log(`Pokemon id is ${val}`);
    next();
})
router
    .route('/')
    .get(projectsController.projects)

router
    .route('/:id')
    .get(projectsController.getProject)


module.exports = router;