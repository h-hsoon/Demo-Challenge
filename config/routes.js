const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');


router.get('/',controllers.homePage);
router.get('/new-articl',controllers.newArticl);
router.post('/add-new-articl',controllers.addNewArticl)


module.exports = router;