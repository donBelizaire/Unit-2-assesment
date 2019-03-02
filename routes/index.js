var express = require('express');
var router = express.Router();
var todos = require('../module/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('home Route')
  res.render('index', { title: 'Unit 2 Assessment', todos: todos});
});

router.post('/', create );


function create(req, res) {
  console.log('post route');
    console.log(req.body);
    todos.push({
      item: req.body.data, 
      done: false
    })
    res.redirect('/');
  
};

module.exports = router;
