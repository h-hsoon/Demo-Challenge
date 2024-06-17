const articlModel = require('../models/articleModel');

const homePage =(erq,res) => {
  articlModel.find()
  .then((articls) => {
    res.render('home',{articls : articls,title:"Home page"})
  })
};

const newArticl =(req,res) => {
    res.render("newArticl", {title: "New Articl"});
};

const addNewArticl = (req,res) => {
    const newArticl = new articlModel(req.body);
    newArticl.save()
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {consol.log(err)})
};

module.exports = {
    homePage,
    newArticl,
    addNewArticl
};