const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');


router.get('/',controllers.homePage);
router.get('/new-articl',controllers.newArticl);
router.post('/add-new-articl',controllers.addNewArticl);
router.get('/articl/:id',controllers.articlPage);
router.get('/delete/:id',controllers.deleteArticle);
router.get('/edit/:id',controllers.editArticle);
router.post('/edit-articl/:id',controllers.saveEditArticle)


module.exports = router;