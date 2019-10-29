const express = require('express');
const connectDB = require('./connection');
const router = express.Router();
const mongooes = require('mongoose');
//const book = require('./movies');

connectDB();

var moviesschema = new mongooes.Schema({
  name:String,
  img:String,
  summary:String
});

var movielist = mongooes.model('Book',moviesschema,'books');

router.get('/movielist', function(req, res, next) {
  movielist.find({})
  .exec(function(err,docs){
    if(err){
      res.json(err);
      console.log(err);}
      else{
        //res.json(docs);    
        res.render('index',{user:docs,title:'Movie List'});
      }
  });
  });
module.exports = router;
