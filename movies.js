var mongooes = require('mongoose');

var moviesschema = new mongooes.Schema({
    name:String,
    img:String,
    summary:String
  });
  
  module.export = mongooes.model('Book',moviesschema);
