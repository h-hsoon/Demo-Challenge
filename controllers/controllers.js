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

const articlPage = (req,res) => {
  const id = req.params.id;
  articlModel.findById(id)
  .then((articl) => {
    res.render('fullArticle',{articl: articl,title:"article"})
  })
};

const deleteArticle = (req,res) => {
  const id = req.params.id;
  articlModel.findByIdAndDelete(id)
  .then(()=>{
    res.redirect('/');
  })
  .catch(err => consol.log(err));
};

const editArticle = (req,res) => {
  const id = req.params.id;
  articlModel.findById(id)
  .then((article) => {
    res.render('editArticle',{articl: article,title:"Edit article"})  
  })
  .catch(err => consol.log(err));
 }

const saveEditArticle = (req,res) => {
  const id = req.params.id;
  articlModel.findByIdAndUpdate(id,req.body)
  .then(() => {
    res.redirect('/');
  })
  .catch(err => consol.log(err));
}

module.exports = {
    homePage,
    newArticl,
    addNewArticl,
    articlPage,
    deleteArticle,
    editArticle,
    saveEditArticle
};